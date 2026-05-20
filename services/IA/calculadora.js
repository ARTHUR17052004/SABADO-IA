function calcular(pergunta) {

    const texto =
        pergunta
            .toLowerCase()
            .replace(',', '.');

    // =====================
    // SOMA
    // =====================

    let match =
        texto.match(
            /(\d+)\s*(\+|mais)\s*(\d+)/i
        );

    if (match) {

        const resultado =
            Number(match[1]) +
            Number(match[3]);

        return `O resultado é ${resultado}.`;

    }

    // =====================
    // SUBTRAÇÃO
    // =====================

    match =
        texto.match(
            /(\d+)\s*(\-|menos)\s*(\d+)/i
        );

    if (match) {

        const resultado =
            Number(match[1]) -
            Number(match[3]);

        return `O resultado é ${resultado}.`;

    }

    // =====================
    // MULTIPLICAÇÃO
    // =====================

    match =
        texto.match(
            /(\d+)\s*(x|\*|vezes)\s*(\d+)/i
        );

    if (match) {

        const resultado =
            Number(match[1]) *
            Number(match[3]);

        return `O resultado é ${resultado}.`;

    }

    // =====================
    // DIVISÃO
    // =====================

    match =
        texto.match(
            /(\d+)\s*(\/|dividido por)\s*(\d+)/i
        );

    if (match) {

        const resultado =
            Number(match[1]) /
            Number(match[3]);

        return `O resultado é ${resultado}.`;

    }

    // =====================
    // PORCENTAGEM
    // =====================

    match =
        texto.match(
            /(\d+)%\s*de\s*(\d+)/i
        );

    if (match) {

        const resultado =
            (
                Number(match[1]) / 100
            ) *
            Number(match[2]);

        return `O resultado é ${resultado}.`;

    }

    return null;

}

module.exports =
    calcular;