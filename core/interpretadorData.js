const {
    obterAgora,
    formatarData
} = require(
    '../services/ia/tempo'
);

// =========================
// INTERPRETAR DATA
// =========================

function interpretarData(
    pergunta
) {

    const texto =
        pergunta.toLowerCase();

    // =====================
    // DATA ATUAL BRASIL
    // =====================

    const hoje =
        obterAgora();

    // =====================
    // HOJE
    // =====================

    if (
        texto.includes('hoje')
    ) {

        return formatarData(
            hoje
        );

    }

    // =====================
    // ONTEM
    // =====================

    if (
        texto.includes('ontem')
    ) {

        const ontem =
            new Date(hoje);

        ontem.setDate(
            ontem.getDate() - 1
        );

        return formatarData(
            ontem
        );

    }

    // =====================
    // AMANHÃ
    // =====================

    if (

        texto.includes('amanhã') ||

        texto.includes('amanha')

    ) {

        const amanha =
            new Date(hoje);

        amanha.setDate(
            amanha.getDate() + 1
        );

        return formatarData(
            amanha
        );

    }

    // =====================
    // DATA NORMAL
    // =====================

    const dataMatch =

        texto.match(
            /\d{2}\/\d{2}\/\d{4}/
        );

    if (dataMatch) {

        return dataMatch[0];

    }

    // =====================
    // MÊS ATUAL
    // =====================

    if (

        texto.includes('mês atual') ||

        texto.includes('mes atual')

    ) {

        return formatarData(
            hoje
        );

    }

    return null;

}

module.exports =
    interpretarData;