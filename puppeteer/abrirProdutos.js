async function abrirTelaProdutos(page) {

    console.log('INICIANDO NAVEGAÇÃO PRODUTOS');

    // espera body
    await page.waitForSelector('body');

    // estabilidade
    await new Promise(resolve => setTimeout(resolve, 2000));

    // abre menu gestão produtos
    await page.evaluate(() => {

        const elementos = [...document.querySelectorAll('span')];

        const menu = elementos.find(el =>
            el.innerText.includes('Gestão de Produtos')
        );

        if (menu) {
            menu.click();
        }

    });

    console.log('MENU PRODUTOS CLICADO');

    // espera submenu abrir
    await new Promise(resolve => setTimeout(resolve, 3000));

    // clica lista produtos
    await page.evaluate(() => {

        const elementos = [...document.querySelectorAll('span')];

        const submenu = elementos.find(el =>
            el.innerText.includes('Lista de Produtos')
        );

        if (submenu) {
            submenu.click();
        }

    });

    console.log('LISTA PRODUTOS ABERTA');

    // TEMPO MUITO MAIOR
    await new Promise(resolve => setTimeout(resolve, 10000));

    // DEBUG
    console.log(await page.content());

}

module.exports = abrirTelaProdutos;