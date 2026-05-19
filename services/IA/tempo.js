function obterDataAtual() {

    const agora =
        new Date();

    return {

        data:
            agora.toLocaleDateString(
                'pt-BR'
            ),

        hora:
            agora.toLocaleTimeString(
                'pt-BR'
            ),

        timestamp:
            agora.getTime()

    };

}

module.exports = {

    obterDataAtual

};