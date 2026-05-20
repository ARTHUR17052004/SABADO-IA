require('dotenv').config();

const {
    api,
    criarHeaders
} = require('./utils/goevoApi');

const {
    iniciarSessao
} = require('./core/sessionManager');

async function testarApiAutenticada() {

    try {

        const sessao =
            await iniciarSessao();

        const headers =
            criarHeaders(
                sessao.cookieHeader
            );

        console.log(
            'CONSULTANDO API'
        );

        const response =
            await api.post(

                '/PurchaseOrder',

                new URLSearchParams({

                    purchase_order_id:
                        '002821',

                    page:
                        '1',

                    page_size:
                        '10'

                }).toString(),

                {
                    headers
                }

            );

        console.log(
            'RESPOSTA API'
        );

        console.log(

            JSON.stringify(
                response.data,
                null,
                2
            )

        );

    } catch (error) {

        console.log(
            'ERRO API'
        );

        if (error.response) {

            console.log(

                JSON.stringify(
                    error.response.data,
                    null,
                    2
                )

            );

        } else {

            console.log(
                error.message
            );

        }

    }

}

testarApiAutenticada();