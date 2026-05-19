module.exports = async function consultarEstoque(
    page,
    produto,
    dataInicial = null,
    dataFinal = null,
    movimentacao = 'Todos'
) {

    console.log('INICIANDO CONSULTA ESTOQUE');


    // =========================
    // ESPERA TELA
    // =========================

    await page.waitForSelector('#btnPesquisar');

    await new Promise(resolve => setTimeout(resolve, 3000));


    // =========================
    // PRODUTO
    // =========================

    await page.click('#s2id_produto');

    console.log('CLICOU SELECT PRODUTO');

    await new Promise(resolve => setTimeout(resolve, 2000));


    // digita como humano
    await page.keyboard.type(produto, {
        delay: 150
    });

    console.log('PRODUTO DIGITADO');

    await new Promise(resolve => setTimeout(resolve, 3000));


    // seleciona primeiro resultado
    await page.keyboard.press('ArrowDown');

    await new Promise(resolve => setTimeout(resolve, 1000));

    await page.keyboard.press('Enter');

    console.log('PRODUTO SELECIONADO');



    // =========================
    // DATA INICIAL
    // =========================

    if (dataInicial) {

        await page.click('#txtDataInicial', { clickCount: 3 });

        await page.keyboard.press('Backspace');

        await page.type(
            '#txtDataInicial',
            dataInicial
        );

        console.log('DATA INICIAL DEFINIDA');

    }



    // =========================
    // DATA FINAL
    // =========================

    if (dataFinal) {

        await page.click('#txtDataFinal', { clickCount: 3 });

        await page.keyboard.press('Backspace');

        await page.type(
            '#txtDataFinal',
            dataFinal
        );

        console.log('DATA FINAL DEFINIDA');

    }



    // =========================
    // MOVIMENTAÇÃO
    // =========================

    if (
        movimentacao &&
        movimentacao !== 'Todos'
    ) {

        await page.select(
            '#ddlMovimentacao',
            movimentacao
        );

        console.log('MOVIMENTAÇÃO DEFINIDA');

    }



    // =========================
    // BUSCAR
    // =========================

    await page.click('#btnPesquisar');

    console.log('BUSCA REALIZADA');



    // =========================
    // ESPERA TABELA
    // =========================

    await page.waitForSelector(
        '#tbl_scmMovimentacaoManualEstoque tbody tr'
    );

    console.log('TABELA ENCONTRADA');



    // =========================
    // EXTRAIR DADOS
    // =========================

    const dados = await page.evaluate(() => {

        const linhas = document.querySelectorAll(
            '#tbl_scmMovimentacaoManualEstoque tbody tr'
        );

        const resultado = [];

        linhas.forEach(linha => {

            const colunas = linha.querySelectorAll('td');

            resultado.push({

                documento:
                    colunas[0]?.innerText?.trim() || '',

                produto:
                    colunas[1]?.innerText?.trim() || '',

                quantidade:
                    colunas[2]?.innerText?.trim() || '',

                emissao:
                    colunas[3]?.innerText?.trim() || '',

                solicitante:
                    colunas[4]?.innerText?.trim() || '',

                classificacao:
                    colunas[5]?.innerText?.trim() || '',

                custo:
                    colunas[6]?.innerText?.trim() || '',

                movimentacao:
                    colunas[7]?.innerText?.trim() || ''

            });

        });

        return resultado;

    });

    console.log('DADOS EXTRAIDOS');

    return dados;

}