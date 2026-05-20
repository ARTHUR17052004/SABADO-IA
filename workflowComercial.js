const buscarProduto =
require(
    './services/comercial/buscarProduto'
);

const consultarRelatorioVendas =
require(
    './services/comercial/consultarRelatorioVendas'
);

const interpretarPerguntaComercial =
require(
    './services/comercial/interpretarPerguntaComercial'
);

const interpretarData =
require(
    './core/interpretadorData'
);

const {

    salvarMemoria,
    buscarMemoria

} = require(
    './core/memoriaGlobal'
);

// =========================
// EXECUTA
// =========================

async function executar() {

    const pergunta =
        process.argv[2];

    // =========================
    // VALIDA
    // =========================

    if (!pergunta) {

        console.log(
            'Pergunta não enviada.'
        );

        return;

    }

    // =========================
    // DATA GLOBAL
    // =========================

    let data =

        interpretarData(
            pergunta
        );

    // =========================
    // USA MEMÓRIA GLOBAL
    // =========================

    if (!data) {

        data =

            buscarMemoria(
                'ultimaData'
            );

    }

    // =========================
    // SEM DATA
    // =========================

    if (!data) {

        console.log(
            'Informe uma data.'
        );

        return;

    }

    // =========================
    // SALVA DATA
    // =========================

    salvarMemoria(
        'ultimaData',
        data
    );

    // =========================
    // CONSULTA RELATÓRIO
    // =========================

    const relatorio =

        consultarRelatorioVendas(
            data
        );

    // =========================
    // NÃO ENCONTROU
    // =========================

    if (!relatorio) {

        console.log(
            'Relatório não encontrado.'
        );

        return;

    }

    // =========================
    // SALVA MEMÓRIA
    // =========================

    salvarMemoria(
        'ultimoRelatorio',
        relatorio
    );

    salvarMemoria(
        'ultimaPergunta',
        pergunta
    );

    salvarMemoria(
        'ultimoModulo',
        'comercial'
    );

    // =========================
    // INTERPRETA
    // =========================

    const intencao =

        interpretarPerguntaComercial(
            pergunta
        );

    // =========================
    // BUSCA PRODUTO ESPECÍFICO
    // =========================

    const produtoEncontrado =

        buscarProduto(
            pergunta,
            relatorio.produtos
        );

    if (produtoEncontrado) {

        salvarMemoria(
            'ultimoProduto',
            produtoEncontrado.nome
        );

        console.log(`

📦 PRODUTO ENCONTRADO

📅 ${relatorio.data}

🏷️ ${produtoEncontrado.nome}

📊 Quantidade:
${produtoEncontrado.quantidade}

💰 Valor:
${produtoEncontrado.valor}

`);

        return;

    }

    // =========================
    // PRODUTO MAIS VENDIDO
    // =========================

    if (

        intencao ===
        'PRODUTO_MAIS_VENDIDO'

    ) {

        const produto =
            relatorio.produtos[0];

        salvarMemoria(
            'ultimoProduto',
            produto.nome
        );

        console.log(`

📦 PRODUTO MAIS VENDIDO

📅 ${relatorio.data}

🏷️ ${produto.nome}

📊 Quantidade:
${produto.quantidade}

💰 Valor:
${produto.valor}

`);

        return;

    }

    // =========================
    // TODOS PRODUTOS
    // =========================

    if (

        intencao ===
        'TODOS_PRODUTOS'

    ) {

        let resposta = `

📦 TODOS OS PRODUTOS

📅 ${relatorio.data}

`;

        for (

            const produto of
            relatorio.produtos

        ) {

            resposta += `

🏷️ ${produto.nome}

📊 ${produto.quantidade}

💰 ${produto.valor}

`;

        }

        console.log(
            resposta
        );

        return;

    }

    // =========================
    // MELHOR VENDEDOR
    // =========================

    if (

        intencao ===
        'MELHOR_VENDEDOR'

    ) {

        const vendedor =
            relatorio.vendedores[0];

        salvarMemoria(
            'ultimoVendedor',
            vendedor.nome
        );

        console.log(`

👑 MELHOR VENDEDOR

📅 ${relatorio.data}

🏷️ ${vendedor.nome}

💰 ${vendedor.valor}

`);

        return;

    }

    // =========================
    // TODOS VENDEDORES
    // =========================

    if (

        intencao ===
        'TODOS_VENDEDORES'

    ) {

        let resposta = `

👤 VENDEDORES

📅 ${relatorio.data}

`;

        for (

            const vendedor of
            relatorio.vendedores

        ) {

            resposta += `

🏷️ ${vendedor.nome}

💰 ${vendedor.valor}

`;

        }

        console.log(
            resposta
        );

        return;

    }

    // =========================
    // CLIENTES
    // =========================

    if (

        intencao ===
        'CLIENTES'

    ) {

        let resposta = `

🏆 TOP CLIENTES

📅 ${relatorio.data}

`;

        for (

            const cliente of
            relatorio.clientes

        ) {

            resposta += `

🏢 ${cliente.nome}

💰 ${cliente.valor}

`;

        }

        console.log(
            resposta
        );

        return;

    }

    // =========================
    // FATURAMENTO
    // =========================

    if (

        intencao ===
        'FATURAMENTO'

    ) {

        console.log(`

💰 FATURAMENTO

📅 ${relatorio.data}

💵 ${relatorio.faturamento}

🚛 ${relatorio.quantidade}

`);

        return;

    }

    // =========================
    // RESUMO
    // =========================

    console.log(`

📊 RESUMO DO DIA

📅 ${relatorio.data}

💰 ${relatorio.faturamento}

🚛 ${relatorio.quantidade}

👑 Melhor vendedor:
${relatorio.vendedores[0]?.nome}

📦 Produto líder:
${relatorio.produtos[0]?.nome}

`);

}

executar();