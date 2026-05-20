const memoria = {

    // =====================
    // CONTEXTO PRINCIPAL
    // =====================

    ultimoPedido: null,

    ultimoFornecedor: null,

    ultimoProduto: null,

    ultimoTipoConsulta: null,

    ultimaPergunta: null,

    ultimaResposta: null,

    ultimoResultado: null,

    // =====================
    // HISTÓRICO
    // =====================

    historico: []

};

// =========================
// ADICIONAR HISTÓRICO
// =========================

memoria.adicionarHistorico = function (

    pergunta,
    resposta

) {

    memoria.historico.push({

        pergunta,

        resposta,

        data:
            new Date()

    });

    // =====================
    // LIMITA HISTÓRICO
    // =====================

    if (

        memoria.historico.length > 100

    ) {

        memoria.historico.shift();

    }

};

module.exports =
    memoria;