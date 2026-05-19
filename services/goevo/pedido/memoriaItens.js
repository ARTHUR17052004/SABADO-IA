let ultimaConsultaItens = null;

function salvarMemoriaItens(dados) {

    ultimaConsultaItens = dados;

}

function obterMemoriaItens() {

    return ultimaConsultaItens;

}

module.exports = {

    salvarMemoriaItens,
    obterMemoriaItens

};