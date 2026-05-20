const fs =
    require('fs');

const path =
    require('path');

const caminhoArquivo =
    path.join(
        __dirname,
        'historicoVendas.json'
    );

function salvarRelatorioVendas(
    relatorio
) {

    try {

        let historico = [];

        // =========================
        // EXISTE ARQUIVO
        // =========================

        if (

            fs.existsSync(
                caminhoArquivo
            )

        ) {

            const conteudo =

                fs.readFileSync(
                    caminhoArquivo,
                    'utf8'
                );

            historico =
                JSON.parse(
                    conteudo
                );

        }

        // =========================
        // REMOVE DUPLICADO
        // =========================

        historico =

            historico.filter(

                item =>

                    item.data !==
                    relatorio.data

            );

        // =========================
        // SALVA NOVO
        // =========================

        historico.push(
            relatorio
        );

        fs.writeFileSync(

            caminhoArquivo,

            JSON.stringify(
                historico,
                null,
                2
            )

        );

        console.log(
            'RELATÓRIO SALVO'
        );

    } catch (erro) {

        console.log(
            erro
        );

    }

}

module.exports =
    salvarRelatorioVendas;