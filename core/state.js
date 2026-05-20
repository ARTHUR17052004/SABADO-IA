const state = {

    // =====================
    // BROWSER
    // =====================

    browser: null,

    page: null,

    // =====================
    // PROCESSAMENTO
    // =====================

    isProcessing: false,

    currentOperation: null,

    status: 'IDLE',

    // =====================
    // FILA
    // =====================

    queue: []

};

module.exports =
    state;