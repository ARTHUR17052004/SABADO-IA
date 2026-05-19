function tratarPerguntaPedido(pergunta, pedido) {

    const texto =
        pergunta.toLowerCase();

    // =========================
    // FORNECEDOR
    // =========================

    if (
        texto.includes('fornecedor') ||
        texto.includes('empresa') ||
        texto.includes('quem vendeu')
    ) {

        return `O fornecedor do pedido ${pedido.numero} é ${pedido.fornecedor}.`;

    }

    // =========================
    // VALOR
    // =========================

    if (
        texto.includes('valor') ||
        texto.includes('preço') ||
        texto.includes('custa') ||
        texto.includes('total') ||
        texto.includes('quanto ficou')
    ) {

        return `O pedido ${pedido.numero} possui valor total de ${pedido.valor}.`;

    }

    // =========================
    // COMPRADOR
    // =========================

    if (
        texto.includes('comprador') ||
        texto.includes('quem comprou') ||
        texto.includes('responsável')
    ) {

        return `O comprador responsável pelo pedido ${pedido.numero} é ${pedido.comprador}.`;

    }

    // =========================
    // ENTREGA
    // =========================

    if (
        texto.includes('entrega') ||
        texto.includes('previsão') ||
        texto.includes('prazo')
    ) {

        return `A previsão de entrega do pedido ${pedido.numero} é ${pedido.previsaoEntrega}.`;

    }

    // =========================
    // SALDO
    // =========================

    if (
        texto.includes('saldo')
    ) {

        return `O saldo atual do pedido ${pedido.numero} é ${pedido.saldo}.`;

    }

    // =========================
    // CIDADE
    // =========================

    if (
        texto.includes('cidade') ||
        texto.includes('município') ||
        texto.includes('local')
    ) {

        return `O pedido ${pedido.numero} pertence ao município de ${pedido.municipio} - ${pedido.estado}.`;

    }

    // =========================
    // EMAIL FORNECEDOR
    // =========================

    if (
        texto.includes('email') &&
        texto.includes('fornecedor')
    ) {

        return `O email do fornecedor ${pedido.fornecedor} é ${pedido.emailFornecedor}.`;

    }

    // =========================
    // CNPJ
    // =========================

    if (
        texto.includes('cnpj')
    ) {

        return `O CNPJ do fornecedor ${pedido.fornecedor} é ${pedido.cnpjFornecedor}.`;

    }

    // =========================
    // QUANTIDADE
    // =========================

    if (
        texto.includes('quantidade') ||
        texto.includes('quantos')
    ) {

        return `A quantidade do pedido ${pedido.numero} é ${pedido.quantidade}.`;

    }

    // =========================
    // MOEDA
    // =========================

    if (
        texto.includes('moeda')
    ) {

        return `A moeda utilizada no pedido ${pedido.numero} é ${pedido.moeda}.`;

    }

    // =========================
    // SOLICITANTE
    // =========================

    if (
        texto.includes('solicitante')
    ) {

        return `O solicitante do pedido ${pedido.numero} é ${pedido.solicitante}.`;

    }

    // =========================
    // PRE PEDIDO
    // =========================

    if (
        texto.includes('pré pedido') ||
        texto.includes('pre pedido') ||
        texto.includes('pre-pedido')
    ) {

        return `O pré-pedido relacionado ao pedido ${pedido.numero} é ${pedido.prePedido}.`;

    }

    // =========================
    // EMISSÃO
    // =========================

    if (
        texto.includes('emissão') ||
        texto.includes('emitido')
    ) {

        return `O pedido ${pedido.numero} foi emitido em ${pedido.emissao}.`;

    }

    // =========================
    // DADOS COMPLETOS
    // =========================

    if (
        texto.includes('dados') ||
        texto.includes('completo') ||
        texto.includes('informações')
    ) {

        return `
📦 Pedido: ${pedido.numero}

🏢 Fornecedor: ${pedido.fornecedor}
👤 Comprador: ${pedido.comprador}

💰 Valor: ${pedido.valor}
💵 Saldo: ${pedido.saldo}

📅 Emissão: ${pedido.emissao}
🚚 Entrega: ${pedido.previsaoEntrega}

📍 Cidade: ${pedido.municipio} - ${pedido.estado}

📧 Email fornecedor:
${pedido.emailFornecedor}

🪪 CNPJ:
${pedido.cnpjFornecedor}
`;

    }

    // =========================
    // FALLBACK
    // =========================

    return `
Não encontrei essa informação específica no pedido.

📦 Resumo do pedido ${pedido.numero}

🏢 Fornecedor: ${pedido.fornecedor}
💰 Valor: ${pedido.valor}
🚚 Entrega: ${pedido.previsaoEntrega}
📍 Cidade: ${pedido.municipio} - ${pedido.estado}
`;

}

module.exports = tratarPerguntaPedido;