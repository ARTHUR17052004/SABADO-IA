require('dotenv').config();

const puppeteer = require('puppeteer');

let browser = null;
let page = null;
let cookieHeader = null;

async function iniciarSessao() {

    if (cookieHeader) {

        console.log('USANDO SESSÃO EXISTENTE');

        return {
            browser,
            page,
            cookieHeader
        };

    }

    console.log('ABRINDO NAVEGADOR');

    browser = await puppeteer.launch({
        headless: false
    });

    page = await browser.newPage();

    console.log('ABRINDO GOEVO');

    await page.goto(process.env.GOEVO_URL, {
        waitUntil: 'networkidle2'
    });

    console.log('REALIZANDO LOGIN');

    await page.type(
        '#wucLogin_txtUsuario',
        process.env.GOEVO_USER
    );

    await page.type(
        '#wucLogin_txtSenha',
        process.env.GOEVO_PASSWORD
    );

    await page.click('#wucLogin_btnLogin');

    await new Promise(resolve => setTimeout(resolve, 8000));

    console.log('CAPTURANDO COOKIES');

    const cookies = await page.cookies();

    cookieHeader = cookies
        .map(cookie => `${cookie.name}=${cookie.value}`)
        .join('; ');

    console.log('SESSÃO CRIADA');

    return {
        browser,
        page,
        cookieHeader
    };

}

module.exports = {
    iniciarSessao
};