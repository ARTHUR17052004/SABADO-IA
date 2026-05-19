const axios = require('axios');

const BASE_URL =
'https://pedreirahvb.goevo.net/ESB/ResourceFiles/wsSendUPD.ashx?COMPANY_ID=Pedreirahvb&EmpFil=0101&moduloAtivo=SCM';

const COOKIE =
'COLA_SEUS_COOKIES_AQUI';

async function consultarGoEvo(data1) {

    try {

        const params = new URLSearchParams();

        params.append('COMPANY_ID', 'Pedreirahvb');
        params.append('EmpFil', '0101');
        params.append('moduloAtivo', 'SCM');

        params.append('data1', JSON.stringify(data1));

        params.append('funcao', 'TPCS.WSGETCONS');

        const response = await axios.post(

            BASE_URL,

            params,

            {

                headers: {

                    'Content-Type':
                    'application/x-www-form-urlencoded; charset=UTF-8',

                    'X-Requested-With':
                    'XMLHttpRequest',

                    'Cookie':
                    COOKIE

                }

            }

        );

        return response.data;

    } catch (error) {

        console.log('ERRO GOEVO');

        console.log(error.response?.data || error.message);

        return null;

    }

}

module.exports = consultarGoEvo;