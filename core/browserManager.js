const iniciarBrowser =
    require('../puppeteer/browser');

const fazerLogin =
    require('../puppeteer/login');

const state =
    require('./state');

const log =
    require('./logger');

// =========================
// LOCK
// =========================

let inicializando =
    false;

// =========================
// INICIALIZAR
// =========================

async function inicializarSistema() {

    try {

        // =====================
        // EVITA CONCORRÊNCIA
        // =====================

        if (inicializando) {

            log(
                'SYSTEM',
                'AGUARDANDO INICIALIZAÇÃO'
            );

            while (inicializando) {

                await new Promise(
                    resolve =>
                        setTimeout(
                            resolve,
                            500
                        )
                );

            }

            return;

        }

        inicializando = true;

        // =====================
        // REUTILIZA PAGE
        // =====================

        if (state.page) {

            try {

                if (

                    !state.page.isClosed()

                ) {

                    await state.page.title();

                    log(
                        'SYSTEM',
                        'REUTILIZANDO PAGE'
                    );

                    inicializando = false;

                    return;

                }

            } catch {

                // =================
                // FECHA BROWSER
                // =================

                try {

                    if (
                        state.browser
                    ) {

                        await state.browser.close();

                    }

                } catch {}

                state.browser =
                    null;

                state.page =
                    null;

            }

        }

        // =====================
        // INICIA
        // =====================

        log(
            'SYSTEM',
            'INICIANDO BROWSER'
        );

        const navegador =

            await iniciarBrowser();

        state.browser =
            navegador.browser;

        state.page =
            navegador.page;

        // =====================
        // LOGIN
        // =====================

        await fazerLogin(
            state.page
        );

        log(
            'SYSTEM',
            'LOGIN OK'
        );

        inicializando = false;

    } catch (erro) {

        inicializando = false;

        // =====================
        // RESET
        // =====================

        try {

            if (state.browser) {

                await state.browser.close();

            }

        } catch {}

        state.browser =
            null;

        state.page =
            null;

        throw erro;

    }

}

module.exports =
    inicializarSistema;