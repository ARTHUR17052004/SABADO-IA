const fs =
    require('fs');

const path =
    require('path');

const caminhoArquivo = path.join(

    __dirname,

    'historicoPedidos.json'

);

function consultarCompras(
    dataConsulta
) {

    try {

        // =========================
        // HISTÓRICO
        // =========================

        const conteudo =

            fs.readFileSync(
                caminhoArquivo,
                'utf8'
            );

        const historico =
            JSON.parse(
                conteudo
            );

        // =========================
        // FILTRA DATA
        // =========================

        const pedidos =

            historico.filter(item => {

                if (!item.dataPedido) {

                    return false;

                }

                return (
                    item.dataPedido ===
                    dataConsulta
                );

            });

        // =========================
        // SOMA
        // =========================

        let total = 0;

        pedidos.forEach(item => {

            total +=
                Number(
                    item.valor
                );

        });

        // =========================
        // RESPOSTA
        // =========================

        return `

📊 COMPRAS

📅 Data:
${dataConsulta}

🧾 Pedidos:
${pedidos.length}

💰 Total Comprado:
R$ ${total.toLocaleString('pt-BR')}

`;

    } catch (erro) {

        return `
Erro ao consultar compras.
`;

    }

}

module.exports =
    consultarCompras;