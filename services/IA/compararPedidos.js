const buscarPedido =
    require('../goevo/pedido');

async function compararPedidos(
    pedido1,
    pedido2
) {

    const dadosPedido1 =
        await buscarPedido(
            pedido1
        );

    const dadosPedido2 =
        await buscarPedido(
            pedido2
        );

    return `Comparação entre pedidos:

Pedido ${pedido1}
Valor: ${dadosPedido1.valor}

Pedido ${pedido2}
Valor: ${dadosPedido2.valor}`;

}

module.exports =
    compararPedidos;