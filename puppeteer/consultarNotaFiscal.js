module.exports = async function consultarNotaFiscal(
    page,
    numeroNF
) {

    console.log('INICIANDO CONSULTA NF');



    // =========================
    // NOTA FISCAL
    // =========================

    await page.waitForSelector('#ddlNotaFiscal');

    await page.click('#ddlNotaFiscal', {
        clickCount: 3
    });

    await page.keyboard.press('Backspace');

    await page.type(
        '#ddlNotaFiscal',
        numeroNF.toString(),
        { delay: 80 }
    );

    console.log('NF DIGITADA');



    // =========================
    // STATUS = TODOS
    // =========================

    const options = await page.evaluate(() => {

        const select =
            document.querySelector('#ddlStatus');

        return Array.from(select.options).map(o => ({
            text: o.text,
            value: o.value
        }));

    });

    console.log('OPTIONS STATUS:', options);



    // tenta selecionar TODOS
    for (const option of options) {

        if (
            option.text
                .toLowerCase()
                .includes('todos')
        ) {

            await page.select(
                '#ddlStatus',
                option.value
            );

            console.log(
                'STATUS DEFINIDO:',
                option.value
            );

            break;
        }

    }



    // =========================
    // LIMPA DATA EMISSÃO DE
    // =========================

    await page.evaluate(() => {

        const campo =
            document.querySelector('#txtDtInicial');

        campo.value = '';

    });

    console.log('DATA LIMPA');



    // =========================
    // ESPERA AJAX
    // =========================

    await new Promise(resolve =>
        setTimeout(resolve, 1500)
    );



    // =========================
    // BUSCAR
    // =========================

    await page.click('#btnFiltrar');

    console.log('BUSCA REALIZADA');



    // =========================
    // ESPERA TABELA
    // =========================

    await new Promise(resolve =>
        setTimeout(resolve, 4000)
    );

    await page.waitForSelector(
        '#tbl_scmListaNotaFiscal2 tbody tr'
    );

    console.log('TABELA ENCONTRADA');



    // =========================
    // EXTRAIR DADOS
    // =========================

    const dados = await page.evaluate(() => {

        const linhas = document.querySelectorAll(
            '#tbl_scmListaNotaFiscal2 tbody tr'
        );

        const resultado = [];

        linhas.forEach(linha => {

            const textoLinha =
                linha.innerText;

            if (
                textoLinha.includes(
                    'No data available'
                )
            ) {
                return;
            }

            const colunas =
                linha.querySelectorAll('td');

            resultado.push({

                documento:
                    colunas[0]?.innerText?.trim() || '',

                serie:
                    colunas[1]?.innerText?.trim() || '',

                fornecedor:
                    colunas[2]?.innerText?.trim() || '',

                pedidoCompra:
                    colunas[3]?.innerText?.trim() || '',

                emissao:
                    colunas[4]?.innerText?.trim() || '',

                vencimento:
                    colunas[5]?.innerText?.trim() || '',

                incluidoPor:
                    colunas[6]?.innerText?.trim() || '',

                dataInclusao:
                    colunas[7]?.innerText?.trim() || '',

                status:
                    colunas[8]?.innerText?.trim() || '',

                valor:
                    colunas[9]?.innerText?.trim() || ''

            });

        });

        return resultado;

    });

    console.log('DADOS EXTRAIDOS');

    return dados;

}