function limpar(valor) {

    if (!valor) return '';

    return String(valor).trim();

}

function formatarValor(valor) {

    if (!valor) return '0';

    return Number(valor).toLocaleString(
        'pt-BR',
        {
            style: 'currency',
            currency: 'BRL'
        }
    );

}

function formatarData(data) {

    if (!data || data.length !== 8) return '';

    return `${data.slice(6, 8)}/${data.slice(4, 6)}/${data.slice(0, 4)}`;

}

function mapearPedido(pedido) {

    return {

        numero: limpar(pedido.C7_NUM),

        fornecedor: limpar(pedido.A2_NOME),

        comprador: limpar(pedido.Y1_NOME),

        valor: formatarValor(pedido.C7_TOTAL),

        saldo: formatarValor(pedido.SALDO),

        emissao: formatarData(pedido.C7_EMISSAO),

        previsaoEntrega: formatarData(pedido.C7_DATPRF),

        municipio: limpar(pedido.PS4_MUN),

        estado: limpar(pedido.PS4_EST),

        solicitante: limpar(pedido.C7_SOLICIT),

        prePedido: limpar(pedido.PREPEDIDO),

        emailComprador: limpar(pedido.Y1_EMAIL),

        emailFornecedor: limpar(pedido.A2_EMAIL),

        cnpjFornecedor: limpar(pedido.A2_CGC),

        moeda: limpar(pedido.ZT9_DESCRI),

        quantidade: limpar(pedido.C7_QUANT)

    };

}

module.exports = mapearPedido;