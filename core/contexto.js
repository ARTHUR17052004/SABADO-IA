const contexto = {

    // =====================
    // PEDIDO
    // =====================

    ultimoPedido: null,

    // =====================
    // FORNECEDOR
    // =====================

    ultimoFornecedor: null,

    // =====================
    // RESULTADO
    // =====================

    ultimoResultado: null,

    // =====================
    // CONVERSA
    // =====================

    ultimaPergunta: null,

    ultimaResposta: null,

    // =====================
    // HISTÓRICO
    // =====================

    historico: []

};

// =========================
// ADICIONAR HISTÓRICO
// =========================

contexto.adicionarHistorico = function (

    pergunta,
    resposta

) {

    contexto.historico.push({

        pergunta,

        resposta,

        data:
            new Date()

    });

    // =====================
    // LIMITA HISTÓRICO
    // =====================

    if (

        contexto.historico.length > 50

    ) {

        contexto.historico.shift();

    }

};

// =========================
// LIMPAR
// =========================

contexto.limpar = function () {

    contexto.ultimoPedido =
        null;

    contexto.ultimoFornecedor =
        null;

    contexto.ultimoResultado =
        null;

    contexto.ultimaPergunta =
        null;

    contexto.ultimaResposta =
        null;

    contexto.historico = [];

};

module.exports =
    contexto;