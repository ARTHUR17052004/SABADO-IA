const buscarPedido =
    require('./services/goevo/pedido');

const tratarPerguntaPedido =
    require('./services/goevo/pedido/tratarPerguntaPedido');

async function teste() {

    const pergunta =
    'quais os produtos do pedido 002821?';

    const pedido =
        await buscarPedido('002821');

    const resposta =
        tratarPerguntaPedido(
            pergunta,
            pedido
        );

    console.log('================');
    console.log('RESPOSTA SABADO');
    console.log('================');

    console.log(resposta);

}

teste();