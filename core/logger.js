function log(

    tipo,
    mensagem,
    dados = null

) {

    const data =
        new Date()
            .toISOString();

    console.log(

        `[${data}] [${tipo}] ${mensagem}`

    );

    // =====================
    // DADOS EXTRA
    // =====================

    if (dados) {

        console.log(dados);

    }

}

module.exports = log;