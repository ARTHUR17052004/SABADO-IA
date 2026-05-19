async function abrirTelaPedidos(page) {

    console.log('ABRINDO PEDIDOS');

    // =========================
    // GARANTE BODY
    // =========================

    await page.waitForSelector('body');

    // =========================
    // VERIFICA SE JÁ ESTÁ NA TELA
    // =========================

    const jaEstaNaTela =
        await page.evaluate(() => {

            return document.body.innerText
                .includes(
                    'Pedidos de Compra'
                );

        });

    if (jaEstaNaTela) {

        console.log(
            'JÁ ESTÁ NA TELA PEDIDOS'
        );

        return;

    }

    // =========================
    // CLICA MENU LATERAL
    // =========================

    const clicouMenu =
        await page.evaluate(() => {

            const spans = [
                ...document.querySelectorAll(
                    'span'
                )
            ];

            const menu = spans.find(el =>
                el.innerText.trim() ===
                'Pedidos de Compra'
            );

            if (menu) {

                menu.click();

                return true;

            }

            return false;

        });

    if (!clicouMenu) {

        throw new Error(
            'Menu Pedidos não encontrado'
        );

    }

    console.log(
        'MENU PEDIDOS CLICADO'
    );

    // =========================
    // ESPERA SUBMENU
    // =========================

    await page.waitForFunction(() => {

        return [
            ...document.querySelectorAll(
                'span'
            )
        ].some(el =>
            el.innerText.includes(
                'Lista Pedidos de Compra'
            )
        );

    }, {
        timeout: 30000
    });

    // =========================
    // CLICA SUBMENU
    // =========================

    const clicouSubmenu =
        await page.evaluate(() => {

            const spans = [
                ...document.querySelectorAll(
                    'span'
                )
            ];

            const submenu = spans.find(el =>
                el.innerText.trim() ===
                'Lista Pedidos de Compra'
            );

            if (submenu) {

                submenu.click();

                return true;

            }

            return false;

        });

    if (!clicouSubmenu) {

        throw new Error(
            'Submenu não encontrado'
        );

    }

    console.log(
        'SUBMENU CLICADO'
    );

    // =========================
    // ESPERA TELA
    // =========================

    await page.waitForSelector(
        '#txtNumPed',
        {
            timeout: 30000
        }
    );

    console.log(
        'TELA PEDIDOS OK'
    );

}

module.exports = abrirTelaPedidos;