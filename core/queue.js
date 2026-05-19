const state = require('./state');

const log = require('./logger');

async function processQueue() {

    if (state.isProcessing) return;

    const item = state.queue.shift();

    if (!item) return;

    state.isProcessing = true;

    try {

        log(
            'QUEUE',
            'PROCESSANDO OPERAÇÃO'
        );

        const resultado =
            await item.operation();

        item.resolve(resultado);

    } catch (erro) {

        item.reject(erro);

    } finally {

        state.isProcessing = false;

        processQueue();

    }

}

function addQueue(operation) {

    return new Promise((resolve, reject) => {

        state.queue.push({

            operation,

            resolve,

            reject

        });

        log(
            'QUEUE',
            `FILA: ${state.queue.length}`
        );

        processQueue();

    });

}

module.exports = addQueue;