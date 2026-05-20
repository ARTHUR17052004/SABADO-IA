async function consultarFornecedorAPI(
    pedido
) {

    // =====================
    // VALIDA
    // =====================

    if (!pedido) {

        return null;

    }

    // =====================
    // MOCK TEMPORÁRIO
    // =====================

    return {

        fornecedor:
            pedido.fornecedor,

        emailFornecedor:
            pedido.emailFornecedor,

        cnpjFornecedor:
            pedido.cnpjFornecedor,

        telefone:
            pedido.telefone,

        cidade:
            pedido.municipio,

        estado:
            pedido.estado

    };

}

module.exports =
    consultarFornecedorAPI;