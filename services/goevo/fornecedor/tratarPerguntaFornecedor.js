function tratarPerguntaFornecedor(
    pergunta,
    pedido
) {

    // =========================
    // VALIDA
    // =========================

    if (!pedido) {

        return null;

    }

    const texto =
        pergunta.toLowerCase();

    // =========================
    // EMAIL
    // =========================

    if (

        texto.includes('email') ||

        texto.includes('e-mail')

    ) {

        return `
📧 Email do fornecedor:

${pedido.emailFornecedor}
`;

    }

    // =========================
    // CNPJ
    // =========================

    if (

        texto.includes('cnpj')

    ) {

        return `
🏢 CNPJ do fornecedor:

${pedido.cnpjFornecedor}
`;

    }

    // =========================
    // FORNECEDOR
    // =========================

    if (

        texto.includes('fornecedor') ||

        texto.includes('empresa')

    ) {

        return `
🏢 Fornecedor do pedido:

${pedido.fornecedor}
`;

    }

    // =========================
    // NÃO ENTENDEU
    // =========================

    return null;

}

module.exports =
    tratarPerguntaFornecedor;