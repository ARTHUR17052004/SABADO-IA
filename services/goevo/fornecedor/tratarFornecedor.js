function tratarFornecedor(
    fornecedor
) {

    // =====================
    // VALIDA
    // =====================

    if (!fornecedor) {

        return null;

    }

    // =====================
    // NORMALIZA
    // =====================

    return {

        fornecedor:
            fornecedor.fornecedor || '',

        emailFornecedor:
            fornecedor.emailFornecedor || '',

        cnpjFornecedor:
            fornecedor.cnpjFornecedor || '',

        telefone:
            fornecedor.telefone || '',

        cidade:
            fornecedor.cidade || '',

        estado:
            fornecedor.estado || ''

    };

}

module.exports =
    tratarFornecedor;