async function fazerLogin(page) {

    console.log('INICIANDO LOGIN');

    await page.goto(
        'https://pedreirahvb.goevo.net',
        {
            waitUntil: 'networkidle2',
            timeout: 60000
        }
    );

    const jaLogado =
        await page.evaluate(() => {

            return document.body.innerText
                .includes(
                    'Pedidos de Compra'
                );

        });

    if (jaLogado) {

        console.log(
            'SESSÃO JÁ ESTÁ ATIVA'
        );

        return;

    }

    await page.waitForSelector(
        '#wucLogin_txtUsuario',
        {
            timeout: 30000
        }
    );

    await page.type(
        '#wucLogin_txtUsuario',
        'controladoria@grupobritec.com.br'
    );

    await page.type(
        '#wucLogin_txtSenha',
        'britec2323@'
    );

    console.log('LOGIN PREENCHIDO');

    await Promise.all([

        page.click(
            '#wucLogin_btnLogin'
        ),

        page.waitForNavigation({
            waitUntil: 'networkidle2'
        })

    ]);

    console.log('LOGIN OK');

}

module.exports = fazerLogin;