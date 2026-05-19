let ultimoPedido = null;

function salvarPedido(numeroPedido) {

    ultimoPedido =
        numeroPedido;

}

function obterUltimoPedido() {

    return ultimoPedido;

}

module.exports = {

    salvarPedido,
    obterUltimoPedido

};