const contexto =
    require('../../core/contexto');

const memoria =
    require('../../core/memoria');

function resolverReferencia(
    pergunta
) {

    const texto =
        pergunta.toLowerCase();

    // =========================
    // REFERÊNCIAS HUMANAS
    // =========================

    const referencias = [

        'ele',
        'dele',
        'isso',
        'esse',
        'essa',
        'aquele',
        'aquela'

    ];

    const encontrouReferencia =

        referencias.some(ref =>
            texto.includes(ref)
        );

    // =========================
    // USA CONTEXTO
    // =========================

    if (

        encontrouReferencia &&

        contexto.tipoEntidade ===
        'pedido'

    ) {

        return memoria.ultimoPedido;

    }

    return null;

}

module.exports =
    resolverReferencia;