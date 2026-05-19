function extrairNumeroPedido(
    texto
) {

    // =========================
    // PROCURA NÚMEROS
    // =========================

    const match =
        texto.match(/\d+/);

    // =========================
    // NÃO ACHOU
    // =========================

    if (!match) {

        return null;

    }

    let numero =
        match[0];

    // =========================
    // REMOVE ESPAÇOS
    // =========================

    numero =
        numero.trim();

    // =========================
    // PADRONIZA 6 DÍGITOS
    // =========================

    numero =
        numero.padStart(6, '0');

    return numero;

}

module.exports =
    extrairNumeroPedido;