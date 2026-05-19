const puppeteer = require('puppeteer');

let browser = null;

let page = null;

async function iniciarBrowser() {

    try {

        if (browser && page) {

            const paginas =
                await browser.pages();

            if (
                paginas.length > 0 &&
                !page.isClosed()
            ) {

                console.log(
                    'REUTILIZANDO BROWSER'
                );

                return {
                    browser,
                    page
                };

            }

        }

        console.log(
            'INICIANDO NOVO BROWSER'
        );

        browser =
            await puppeteer.launch({

                headless: false,

                defaultViewport: null,

                args: [

                    '--start-maximized',

                    '--no-sandbox',

                    '--disable-setuid-sandbox'

                ]

            });

        page = await browser.newPage();

        page.setDefaultTimeout(60000);

        page.setDefaultNavigationTimeout(
            60000
        );

        page.on('close', () => {

            console.log('PAGE FECHADA');

            page = null;

        });

        browser.on(
            'disconnected',
            () => {

                console.log(
                    'BROWSER DESCONECTADO'
                );

                browser = null;

                page = null;

            }
        );

        return {

            browser,

            page

        };

    } catch (erro) {

        browser = null;

        page = null;

        throw erro;

    }

}

module.exports = iniciarBrowser;