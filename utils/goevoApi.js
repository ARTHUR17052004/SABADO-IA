const axios = require('axios');

const api = axios.create({
    baseURL: 'https://pedreirahvb.goevo.net/API/v1',
    headers: {
        goevo_app_tptoken: '03a5b047-d855-4db2-af0f-98f60d26ad86',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

module.exports = api;