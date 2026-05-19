const fs =
    require('fs');

const path =
    require('path');

const caminhoArquivo = path.join(

    __dirname,

    'historicoPedidos.json'

);

function salvarHistoricoPedido(
    pedido
) {

    try {

        // =========================
        // LÊ HISTÓRICO
        // =========================

        let historico = [];

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
        // VALOR NUMÉRICO
        // =========================

        const valorNumerico =

            Number(

                pedido.valor
                    ?.replace(/[^\d,]/g, '')
                    .replace('.', '')
                    .replace(',', '.')

            ) || 0;

        // =========================
        // REGISTRO
        // =========================

        const registro = {

            pedido:
                pedido.numero,

            fornecedor:
                pedido.fornecedor,

            valor:
                valorNumerico,

            quantidade:
                Number(
                    pedido.quantidade
                ) || 0,

            dataPedido:
                pedido.emissao,

            dataConsulta:
                new Date()
                    .toISOString()

        };

        // =========================
        // EVITA DUPLICADOS
        // =========================

        const jaExiste =

            historico.some(

                item =>

                    item.pedido ===
                    pedido.numero

            );

        if (!jaExiste) {

            historico.push(
                registro
            );

        }

        // =========================
        // SALVA
        // =========================

        fs.writeFileSync(

            caminhoArquivo,

            JSON.stringify(
                historico,
                null,
                2
            )

        );

        console.log(
            'HISTÓRICO SALVO'
        );

    } catch (erro) {

        console.log(
            'ERRO HISTÓRICO'
        );

        console.log(
            erro.message
        );

    }

}

module.exports =
    salvarHistoricoPedido;