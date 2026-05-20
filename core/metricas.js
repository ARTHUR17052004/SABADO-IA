const metricas = {

    totalPerguntas: 0,

    intencoes: {},

    perguntas: {},

    pedidosConsultados: {},

    erros: 0

};

// =========================
// REGISTRAR INTENÇÃO
// =========================

metricas.registrarIntencao = function (

    intencao

) {

    metricas.intencoes[intencao] =

        (

            metricas.intencoes[intencao]
            || 0

        ) + 1;

};

// =========================
// REGISTRAR ERRO
// =========================

metricas.registrarErro = function () {

    metricas.erros++;

};

module.exports =
    metricas;