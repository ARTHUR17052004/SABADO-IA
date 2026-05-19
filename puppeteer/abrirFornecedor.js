module.exports = async function abrirTelaFornecedores(page) {

    console.log('ABRINDO TELA FORNECEDORES');

    await page.evaluate(() => {

        TPNavClickMenu(
            'scmListaFornecedor.html #conteudo',
            '#content',
            'scmListaFornecedor_init()'
        );

    });

    // espera tela carregar
    await page.waitForSelector('input[placeholder*="Código"]');

    console.log('TELA FORNECEDORES ABERTA');

}