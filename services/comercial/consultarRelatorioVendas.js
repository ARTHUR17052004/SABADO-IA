const fs =
    require('fs');

const path =
    require('path');

const caminhoArquivo =
    path.join(
        __dirname,
        'historicoVendas.json'
    );

function consultarRelatorioVendas(
    data
) {

    try {

        const conteudo =

            fs.readFileSync(
                caminhoArquivo,
                'utf8'
            );

        const historico =
            JSON.parse(
                conteudo
            );

        const relatorio =

            historico.find(

                item =>

                    item.data === data

            );

        return relatorio || null;

    } catch (erro) {

        console.log(
            erro
        );

        return null;

    }

}

module.exports =
    consultarRelatorioVendas;