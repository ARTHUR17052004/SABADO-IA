function tratarRelatorioComercial(
    texto
) {

    // =========================
    // VALIDA
    // =========================

    if (

        !texto ||

        typeof texto !== 'string'

    ) {

        return null;

    }

    // =========================
    // DATA
    // =========================

    const dataMatch =

        texto.match(
            /Data:\s*(\d{2}\/\d{2}\/\d{4})/
        );

    // =========================
    // FATURAMENTO
    // =========================

    const faturamentoMatch =

        texto.match(
            /Faturamento:\s*([^\n]+)/i
        );

    // =========================
    // QUANTIDADE
    // =========================

    const quantidadeMatch =

        texto.match(
            /Quantidade.*?:\s*([^\n]+)/i
        );

    // =========================
    // MAIOR VENDEDOR
    // =========================

    const vendedorMatch =

        texto.match(
            /([A-Z\s]+):\s*([\d.,]+\s*mil)/i
        );

    // =========================
    // PRODUTOS
    // =========================
const produtos = [

    ...texto.matchAll(

        /([^\n:]+):\s*([\d.,]+\s*t)/g

    )

];
    // =========================
    // PRODUTO MAIS VENDIDO
    // =========================

    let produtoMaisVendido =
        null;

    if (produtos.length > 0) {

        produtoMaisVendido = {

            nome:
                produtos[0][1].trim(),

            quantidade:
                produtos[0][2].trim()

        };

    }

    // =========================
    // RETORNO
    // =========================

    return {

        data:
            dataMatch
                ? dataMatch[1]
                : null,

        faturamento:
            faturamentoMatch
                ? faturamentoMatch[1]
                : null,

        quantidade:
            quantidadeMatch
                ? quantidadeMatch[1]
                : null,

        maiorVendedor:
            vendedorMatch
                ? vendedorMatch[1].trim()
                : null,

        valorMaiorVendedor:
            vendedorMatch
                ? vendedorMatch[2].trim()
                : null,

        produtoMaisVendido

    };

}

module.exports =
    tratarRelatorioComercial;