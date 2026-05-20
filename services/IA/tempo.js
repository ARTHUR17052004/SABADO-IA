function obterAgora() {

    return new Date();

}

// =========================
// DATA FORMATADA
// =========================

function formatarData(data) {

    const dia =
        String(data.getDate())
            .padStart(2, '0');

    const mes =
        String(data.getMonth() + 1)
            .padStart(2, '0');

    const ano =
        data.getFullYear();

    return `${dia}/${mes}/${ano}`;

}

// =========================
// HORA FORMATADA
// =========================

function formatarHora(data) {

    const hora =
        String(data.getHours())
            .padStart(2, '0');

    const minuto =
        String(data.getMinutes())
            .padStart(2, '0');

    return `${hora}:${minuto}`;

}

// =========================
// DATA ATUAL
// =========================

function obterDataAtual() {

    const agora =
        obterAgora();

    return {

        data:
            formatarData(
                agora
            ),

        hora:
            formatarHora(
                agora
            )

    };

}

// =========================
// EXPORTS
// =========================

module.exports = {

    obterAgora,
    obterDataAtual,
    formatarData

};