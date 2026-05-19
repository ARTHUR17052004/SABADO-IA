function tratarPedido(retornoApi) {

    const convertido =
        JSON.parse(retornoApi.content);

    const pedido =
        convertido
        ?.result
        ?.content
        ?.listofdata
        ?.data;

    return pedido;

}

module.exports = tratarPedido;