function log(tipo, mensagem) {

    const data = new Date().toISOString();

    console.log(
        `[${data}] [${tipo}] ${mensagem}`
    );

}

module.exports = log;