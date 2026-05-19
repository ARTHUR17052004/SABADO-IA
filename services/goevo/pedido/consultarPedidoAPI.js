const axios = require('axios');
const crypto = require('crypto');

async function consultarPedidoAPI(numeroPedido) {

    try {

        console.log('==========================');
        console.log('CONSULTANDO PEDIDO API');
        console.log('Pedido:', numeroPedido);
        console.log('==========================');

        const response = await axios.post(

            'https://pedreirahvb.goevo.net/ESB/ResourceFiles/wsSendUPD.ashx?COMPANY_ID=Pedreirahvb&EmpFil=0101&moduloAtivo=SCM',

            new URLSearchParams({

                funcao: 'TPCS.WSGETCONS',

                data1: JSON.stringify([

                    { Nome: 'CONSULTA', Conteudo: 'SCM030', Tipo: 'C' },
                    { Nome: 'PSH_ID', Conteudo: 'ALL', Tipo: 'C' },
                    { Nome: 'C7_FILENT', Conteudo: 'ALL', Tipo: 'C' },
                    { Nome: 'STATUS', Conteudo: 'ALL', Tipo: 'C' },
                    { Nome: 'EMISSAODE', Conteudo: '20260401', Tipo: 'C' },
                    { Nome: 'EMISSAOATE', Conteudo: '20260514', Tipo: 'C' },
                    { Nome: 'TPEMPRESA', Conteudo: 'ALL', Tipo: 'C' },
                    { Nome: 'FORNECEDOR', Conteudo: 'ALL', Tipo: 'C' },
                    { Nome: 'RESIDUO', Conteudo: 'ALL', Tipo: 'C' },
                    { Nome: 'C7_CONAPRO', Conteudo: 'ALL', Tipo: 'C' },
                    { Nome: 'C7_COMPRA', Conteudo: 'ALL', Tipo: 'C' },

                    // pedido dinâmico
                    { Nome: 'C7_NUM', Conteudo: numeroPedido, Tipo: 'C' },

                    { Nome: 'C7_NUMSC', Conteudo: 'ALL', Tipo: 'C' },
                    { Nome: 'C7_NUMPS0', Conteudo: 'ALL', Tipo: 'C' },
                    { Nome: 'C7_CODPLA', Conteudo: 'ALL', Tipo: 'C' },
                    { Nome: 'C7_FILIAL', Conteudo: 'ALL', Tipo: 'C' },
                    { Nome: 'C7_GRUPCOM', Conteudo: 'ALL', Tipo: 'C' },
                    { Nome: 'C7_CO', Conteudo: 'ALL', Tipo: 'C' },
                    { Nome: 'ENTREGA_NF', Conteudo: 'S', Tipo: 'C' },
                    { Nome: 'CAMPOSCUSTOM', Conteudo: 'IN:', Tipo: 'C' },
                    { Nome: 'CAMPOSCUSTOMGROUP', Conteudo: 'IN:', Tipo: 'C' },
                    { Nome: 'WHERECUSTOM', Conteudo: 'IN: AND C7_FILIAL = XFILIAL(SC7)', Tipo: 'C' },
                    { Nome: 'STATUS_TT', Conteudo: "IN: 'ALL'", Tipo: 'C' },
                    { Nome: 'USUARIO', Conteudo: '000012', Tipo: 'C' },
                    { Nome: 'HEADER', Conteudo: 'N', Tipo: 'C' },
                    { Nome: 'EMPFIL', Conteudo: '0101', Tipo: 'C' },

                    {
                        Nome: 'TPTEMPOINI',
                        Conteudo: new Date().toISOString(),
                        Tipo: 'C'
                    },

                    {
                        Nome: 'TPNEWGUID',
                        Conteudo: crypto.randomUUID(),
                        Tipo: 'C'
                    }

                ])

            }),

            {
                headers: {

                    'goevo_app_ptoken': '03a5b047-d855-4db2-af0f-98f60d26ad86',

                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',

                    'X-Requested-With': 'XMLHttpRequest',

                    'Cookie': 'TPANCID=ba3f9aa6-7f8d-4dda-9957-6c2198d1e177; _ga=GA1.1.1134232633.1758111681; ASP.NET_SessionId=fyp2jmibfdbejontoxroeybi; COMPANY_ID=Pedreirahvb; TPUID=Q09NUEFOWV9JRD1QZWRyZWlyYWh2YiZIVFRQX0hPU1Q9cGVkcmVpcmFodmIuZ29ldm8ubmV0JlNFUlZFUl9OQU1FPXBlZHJlaXJhaHZiLmdvZXZvLm5ldCZTRVJWRVJfUE9SVD00NDMmU0VSVkVSX1BST1RPQ09MPUhUVFAlMkYxLjE=; EmpFil=0101; TPSessionId=3348A4F4-155E-4E3F-9B23-52E22F0B970A; TPToken=2529f2bf-e592-4136-9ba6-9738a041749e; TPSessionPathModule=Home.aspx?modulo=SCM&empresa=Pedreirahvb; codigoUsuario=000012; Config_EmpFil=0101; Config_EmpFilDescricao=PEDREIRA%20HVB; Config_EmpFilLogotipo=%2FESB%2FResourceFiles%2FgetImagem.ashx%3Fimg1%3D%2FEmpresas%2FPedreirahvb%2FImages%2Flogo_0101.png%26img2%3D%2FEmpresas%2FPedreirahvb%2FImages%2Flogo.png; _ga_HXV619MDW5=GS2.1.s1778760288$o209$g1$t1778760849$j30$l0$h0'
                }
            }

        );

        // =========================
        // RETORNO ORIGINAL
        // =========================
            
        return response.data;
    } catch (error) {

        console.log('==========================');
        console.log('ERRO CONSULTA API');
        console.log('==========================');

        console.log(error.message);

        return {
            sucesso: false,
            erro: error.message
        };

    }

}

module.exports = consultarPedidoAPI;