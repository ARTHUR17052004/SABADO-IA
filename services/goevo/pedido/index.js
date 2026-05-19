const consultarPedidoAPI =
    require('./consultarPedidoAPI');

const tratarPedido =
    require('./tratarPedido');

const mapearPedido =
    require('./mapearPedido');

async function buscarPedido(numeroPedido) {

    const retornoApi =
        await consultarPedidoAPI(numeroPedido);

    const pedidoTratado =
        tratarPedido(retornoApi);

    const pedidoFinal =
        mapearPedido(pedidoTratado);

    return pedidoFinal;

}

module.exports = buscarPedido;