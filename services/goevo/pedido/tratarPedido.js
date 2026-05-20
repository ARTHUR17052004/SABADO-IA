function tratarPedido(
    retornoApi
) {

    // =========================
    // VALIDA
    // =========================

    if (

        !retornoApi ||

        !retornoApi.content

    ) {

        return null;

    }

    try {

        // =====================
        // CONVERTE
        // =====================

        const convertido =

            JSON.parse(
                retornoApi.content
            );

        // =====================
        // DADOS
        // =====================

        const pedido =

            convertido
                ?.result
                ?.content
                ?.listofdata
                ?.data;

        // =====================
        // ARRAY
        // =====================

        if (Array.isArray(pedido)) {

            return pedido[0];

        }

        return pedido || null;

    } catch (erro) {

        console.log(
            'ERRO TRATAR PEDIDO'
        );

        console.log(
            erro.message
        );

        return null;

    }

}

module.exports =
    tratarPedido;