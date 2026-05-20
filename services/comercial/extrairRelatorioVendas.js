function extrairRelatorioVendas(
    texto
) {

    try {

        // =========================
        // DATA
        // =========================

        const dataMatch =

            texto.match(
                /Data:\s*(\d{2}\/\d{2}\/\d{4})/i
            );

        // =========================
        // FATURAMENTO
        // =========================

        const faturamentoMatch =

            texto.match(
                /Valor Total do Faturamento:\s*([\d.,]+\s*mil)/i
            );

        // =========================
        // QUANTIDADE
        // =========================

        const quantidadeMatch =

            texto.match(
                /Quantidade Total Vendida:\s*([\d.,]+\s*t)/i
            );

        // =========================
        // VENDEDORES
        // =========================

        const vendedores = [];

        const vendedoresRegex =
            /\n([A-Za-zÀ-ÿ\s]+):\s*([\d.,]+\s*mil)/g;

        let vendedor;

        while (

            (vendedor =
                vendedoresRegex.exec(texto)) !== null

        ) {

            const nome =
                vendedor[1].trim();

            const valor =
                vendedor[2].trim();

            if (

                nome.includes('Valor') ||
                nome.includes('Quantidade')

            ) {

                continue;

            }

            vendedores.push({

                nome,
                valor

            });

        }

        // =========================
        // CLIENTES
        // =========================

        const clientes = [];

        const clientesRegex =
            /\n([A-Za-zÀ-ÿ0-9\s\-.]+)\s+—\s+([\d.,]+\s*mil)/g;

        let cliente;

        while (

            (cliente =
                clientesRegex.exec(texto)) !== null

        ) {

            clientes.push({

                nome:
                    cliente[1].trim(),

                valor:
                    cliente[2].trim()

            });

        }

        // =========================
        // PRODUTOS
        // =========================

        const produtos = [];

        const produtosRegex =
            /\n([A-Za-zÀ-ÿ0-9\s\-\(\)]+):\s*([\d.,]+\s*t)\s*\(([\d.,]+\s*mil)\)/g;

        let produto;

        while (

            (produto =
                produtosRegex.exec(texto)) !== null

        ) {

            produtos.push({

                nome:
                    produto[1].trim(),

                quantidade:
                    produto[2].trim(),

                valor:
                    produto[3].trim()

            });

        }

        // =========================
        // RETORNO
        // =========================

        return {

            tipo:
                'comercial',

            data:
                dataMatch?.[1] || null,

            faturamento:
                faturamentoMatch?.[1] || null,

            quantidade:
                quantidadeMatch?.[1] || null,

            vendedores,

            clientes,

            produtos

        };

    } catch (erro) {

        console.log(
            erro
        );

        return null;

    }

}

module.exports =
    extrairRelatorioVendas;