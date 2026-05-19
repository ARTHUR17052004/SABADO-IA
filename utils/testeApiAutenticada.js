const puppeteer = require('puppeteer');
const axios = require('axios');

async function testarApiAutenticada() {

    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();

    // abre sistema
    await page.goto('https://pedreirahvb.goevo.net', {
        waitUntil: 'networkidle2'
    });

    console.log('GOEVO aberto');

    // login
    await page.type(
        '#wucLogin_txtUsuario',
        'controladoria@grupobritec.com.br'
    );

    await page.type(
        '#wucLogin_txtSenha',
        'britec2323@'
    );

    await page.click('#wucLogin_btnLogin');

    console.log('LOGIN REALIZADO');

    // espera sistema carregar
    await new Promise(resolve => setTimeout(resolve, 8000));

    // pega cookies
    const cookies = await page.cookies();

    console.log('COOKIES CAPTURADOS');

    // transforma cookies em header
    const cookieHeader = cookies
        .map(cookie => `${cookie.name}=${cookie.value}`)
        .join('; ');

    console.log('HEADER COOKIE:', cookieHeader);

    // TESTE API
    try {

        const response = await axios({

            method: 'POST',

            url: 'https://pedreirahvb.goevo.net/API/v1/PurchaseOrder',

            headers: {
                'goevo_app_tptoken': '03a5b047-d855-4db2-af0f-98f60d26ad86',
                'Cookie': cookieHeader,
                'Content-Type': 'application/x-www-form-urlencoded'
            },

            data: new URLSearchParams({
                purchase_order_id: '002821',
                page: '1',
                page_size: '10'
            }).toString()

        });

        console.log('RESPOSTA API:');
        console.log(JSON.stringify(response.data, null, 2));

    } catch (error) {

        console.log('ERRO API');

        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }

    }

}

testarApiAutenticada();