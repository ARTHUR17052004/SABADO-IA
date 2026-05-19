module.exports = async function abrirTelaEstoque(page) {

    console.log('ABRINDO MOVIMENTAÇÃO ESTOQUE');



    // =========================
    // ESPERA MENU
    // =========================

    await page.waitForSelector('.page-sidebar-menu');



    // =========================
    // ABRE GESTÃO DE ESTOQUE
    // =========================

    await page.evaluate(() => {

        const spans = [...document.querySelectorAll('span.title')];

        const gestao = spans.find(span =>
            span.innerText.trim() === 'Gestão de Estoque'
        );

        if (gestao) {
            gestao.click();
        }

    });

    console.log('CLICOU GESTÃO DE ESTOQUE');



    // espera submenu abrir
    await new Promise(resolve => setTimeout(resolve, 2000));



    // =========================
    // CLICA MOVIMENTAÇÃO
    // =========================

    await page.evaluate(() => {

        const spans = [...document.querySelectorAll('span.title')];

        const movimentacao = spans.find(span =>
            span.innerText.trim() === 'Movimentação Estoque'
        );

        if (movimentacao) {
            movimentacao.click();
        }

    });

    console.log('CLICOU MOVIMENTAÇÃO ESTOQUE');



    // =========================
    // ESPERA TELA
    // =========================

    await page.waitForFunction(() => {

        return document.body.innerText.includes(
            'Movimentação de estoque'
        );

    }, {
        timeout: 30000
    });

    console.log('PÁGINA CARREGADA');



    // =========================
    // ESPERA CAMPO
    // =========================

    await page.waitForSelector('#produto', {
        timeout: 30000
    });

    console.log('TELA ESTOQUE ABERTA');

}