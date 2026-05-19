const {
    obterDataAtual
} = require('./tempo');

function tratarTempo(pergunta) {

    pergunta =
        pergunta.toLowerCase();

    // =========================
    // DATA
    // =========================

    if (

        pergunta.includes('data') ||
        pergunta.includes('dia de hoje') ||
        pergunta.includes('que dia é hoje')

    ) {

        const agora =
            obterDataAtual();

        return `Hoje é ${agora.data}.`;

    }

    // =========================
    // HORA
    // =========================

    if (

        pergunta.includes('hora') ||
        pergunta.includes('horário')

    ) {

        const agora =
            obterDataAtual();

        return `Agora são ${agora.hora}.`;

    }

    return null;

}

module.exports =
    tratarTempo;