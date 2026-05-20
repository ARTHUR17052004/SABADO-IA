const consultarFornecedorAPI =
    require('./consultarFornecedorAPI');

const tratarFornecedor =
    require('./tratarFornecedor');

const tratarPerguntaFornecedor =
    require('./tratarPerguntaFornecedor');

// =========================
// CONSULTAR FORNECEDOR
// =========================

async function fornecedor(

    pergunta,
    pedido

) {

    // =====================
    // CONSULTA
    // =====================

    const fornecedorData =

        await consultarFornecedorAPI(
            pedido
        );

    // =====================
    // TRATA
    // =====================

    const fornecedorTratado =

        tratarFornecedor(
            fornecedorData
        );

    // =====================
    // RESPOSTA
    // =====================

    return tratarPerguntaFornecedor(

        pergunta,

        fornecedorTratado

    );

}

module.exports =
    fornecedor;