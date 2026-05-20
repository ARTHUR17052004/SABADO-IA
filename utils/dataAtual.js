function formatarData(
    data
) {

    const dia =
        String(
            data.getDate()
        ).padStart(2, '0');

    const mes =
        String(
            data.getMonth() + 1
        ).padStart(2, '0');

    const ano =
        data.getFullYear();

    return `${dia}/${mes}/${ano}`;

}

// =========================
// HOJE
// =========================

function hoje() {

    return formatarData(
        new Date()
    );

}

// =========================
// ONTEM
// =========================

function ontem() {

    const data =
        new Date();

    data.setDate(
        data.getDate() - 1
    );

    return formatarData(
        data
    );

}

// =========================
// AMANHÃ
// =========================

function amanha() {

    const data =
        new Date();

    data.setDate(
        data.getDate() + 1
    );

    return formatarData(
        data
    );

}

module.exports = {

    hoje,
    ontem,
    amanha

};