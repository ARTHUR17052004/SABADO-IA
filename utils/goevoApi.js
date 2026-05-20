require('dotenv').config();

const axios = require('axios');

const api = axios.create({

    baseURL:
        `${process.env.GOEVO_URL}/API/v1`

});

function criarHeaders(cookieHeader) {

    return {

        goevo_app_tptoken:
            process.env.GOEVO_TOKEN,

        Cookie:
            cookieHeader,

        'Content-Type':
            'application/x-www-form-urlencoded'

    };

}

module.exports = {
    api,
    criarHeaders
};