const metricas =
    require('../../core/metricas');

function gerarAlertas(
    pedido
) {

    const alertas = [];

    // =========================
    // VALOR
    // =========================

    const valor =
        Number(
            pedido.valor
                .replace(/[^\d,]/g, '')
                .replace('.', '')
                .replace(',', '.')
        );

    // =========================
    // QUANTIDADE
    // =========================

    const quantidade =
        Number(
            pedido.quantidade
        );

    // =========================
    // PEDIDO ALTO
    // =========================

    if (valor > 50000) {

        alertas.push(
            '⚠️ Pedido com alto valor financeiro.'
        );

    }

    // =========================
    // GRANDE VOLUME
    // =========================

    if (quantidade > 1000) {

        alertas.push(
            '📦 Pedido com grande volume.'
        );

    }

    // =========================
    // FORNECEDOR RECORRENTE
    // =========================

    const vezesConsultadas =

        metricas.pedidosConsultados[
            pedido.numero
        ];

    if (vezesConsultadas >= 3) {

        alertas.push(
            '🔁 Pedido muito consultado recentemente.'
        );

    }

    // =========================
    // SEM ALERTA
    // =========================

    if (alertas.length === 0) {

        return null;

    }

    return `

🚨 ALERTAS OPERACIONAIS

${alertas.join('\n')}

`;

}

module.exports =
    gerarAlertas;