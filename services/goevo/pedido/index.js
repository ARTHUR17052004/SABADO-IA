const consultarPedidoAPI =
    require('./consultarPedidoAPI');

const tratarPedido =
    require('./tratarPedido');

const mapearPedido =
    require('./mapearPedido');

// =========================
// BUSCAR PEDIDO
// =========================

async function buscarPedido(
    numeroPedido
) {

    // =====================
    // API
    // =====================

    const retornoApi =

        await consultarPedidoAPI(
            numeroPedido
        );

    // =====================
    // TRATA
    // =====================

    const pedidoTratado =

        tratarPedido(
            retornoApi
        );

    // =====================
    // SEM PEDIDO
    // =====================

    if (!pedidoTratado) {

        return null;

    }

    // =====================
    // MAPEIA
    // =====================

    const pedidoFinal =

        mapearPedido(
            pedidoTratado
        );

    return pedidoFinal;

}

module.exports =
    buscarPedido;