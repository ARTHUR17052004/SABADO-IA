const memoria = {

    ultimaPergunta: null,

    ultimaResposta: null,

    ultimoModulo: null,

    ultimaData: null,

    ultimoPeriodo: null,

    ultimoPedido: null,

    ultimoFornecedor: null,

    ultimoCliente: null,

    ultimoProduto: null,

    ultimoRelatorio: null,

    contextoLivre: {}

};

// =========================
// SALVAR
// =========================

function salvarMemoria(
    chave,
    valor
) {

    memoria[chave] =
        valor;

}

// =========================
// BUSCAR
// =========================

function buscarMemoria(
    chave
) {

    return memoria[chave];

}

// =========================
// MEMÓRIA COMPLETA
// =========================

function obterMemoria() {

    return memoria;

}

// =========================
// EXPORTS
// =========================

module.exports = {

    salvarMemoria,

    buscarMemoria,

    obterMemoria

};