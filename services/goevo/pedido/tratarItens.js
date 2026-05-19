function tratarItens(itens, numeroPedido) {

    if (!itens || itens.length === 0) {

        return `Não encontrei itens no pedido ${numeroPedido}.`;

    }

    const fornecedor = itens[0].fornecedor;

    let resposta = '';

    resposta += `📦 Pedido ${numeroPedido}\n\n`;
    resposta += `🏢 Fornecedor: ${fornecedor}\n\n`;
    resposta += `Itens encontrados:\n\n`;

    itens.forEach(item => {

        resposta += `🔹 Item ${item.item}\n`;
        resposta += `Produto: ${item.descricao}\n`;
        resposta += `Qtd: ${item.quantidade}\n`;
        resposta += `Valor: R$ ${item.preco}\n`;
        resposta += `Total: R$ ${item.total}\n\n`;

    });

    return resposta;

}

module.exports = tratarItens;