module.exports = async function abrirTelaNotaFiscal(page) {

    console.log('ABRINDO LISTA NF');



    // espera menu lateral
    await page.waitForSelector('.page-sidebar-menu');



    // clica lista notas fiscais
    await page.evaluate(() => {

        const menus = [...document.querySelectorAll('span.title')];

        const menu = menus.find(
            el => el.innerText.includes('Lista de Notas Fiscais')
        );

        if (menu) {
            menu.click();
        }

    });

    console.log('CLICOU LISTA NF');



    // espera página carregar
    await page.waitForSelector('#ddlNotaFiscal');

    console.log('TELA NF ABERTA');

}