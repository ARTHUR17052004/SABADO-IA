const axios = require('axios');

async function testar() {

    try {

        const params = new URLSearchParams();

        params.append('COMPANY_ID', 'Pedreirahvb');
        params.append('EmpFil', '0101');
        params.append('moduloAtivo', 'SCM');

        params.append(
            'data1',
            '[{"Nome":"CONSULTA","Conteudo":"SCM338","Tipo":"C"},{"Nome":"C7_FILIAL","Conteudo":"01","Tipo":"C"},{"Nome":"C7_NUM","Conteudo":"002824","Tipo":"C"},{"Nome":"ENTREGUE","Conteudo":"N","Tipo":"C"},{"Nome":"EMPFIL_ADHOC","Conteudo":"0101","Tipo":"C"},{"Nome":"SELECT_CUSTOM","Conteudo":"IN: ","Tipo":"C"},{"Nome":"LEFTJOIN_CUSTOM","Conteudo":"IN: ","Tipo":"C"},{"Nome":"USUARIO","Conteudo":"000012","Tipo":"C"},{"Nome":"HEADER","Conteudo":"N","Tipo":"C"},{"Nome":"EMPFIL","Conteudo":"0101","Tipo":"C"},{"Nome":"TPTEMPOINI","Conteudo":"2026-05-15 07:59:22.089","Tipo":"C"},{"Nome":"TPNEWGUID","Conteudo":"187630ed-a162-7a33-149e-ead30399a6c6","Tipo":"C"}]'
        );

        params.append('funcao', 'TPCS.WSGETCONS');

        const response = await axios.post(

            'https://pedreirahvb.goevo.net/ESB/ResourceFiles/wsSendUPD.ashx?COMPANY_ID=Pedreirahvb&EmpFil=0101&moduloAtivo=SCM',

            params,

            {

                headers: {

                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',

                    'X-Requested-With': 'XMLHttpRequest',

                    'Origin': 'https://pedreirahvb.goevo.net',

                    'Referer': 'https://pedreirahvb.goevo.net/Empresas/Pedreirahvb/ModulesTetris/SCM/index.html',

                    'Cookie': 'TPANCID=ba3f9aa6-7f8d-4dda-9957-6c2198d1e177; _ga=GA1.1.1134232633.1758111681; ASP.NET_SessionId=fyp2jmibfdbejontoxroeybi; COMPANY_ID=Pedreirahvb; TPUID=Q09NUEFOWV9JRD1QZWRyZWlyYWh2YiZIVFRQX0hPU1Q9cGVkcmVpcmFodmIuZ29ldm8ubmV0JlNFUlZFUl9OQU1FPXBlZHJlaXJhaHZiLmdvZXZvLm5ldCZTRVJWRVJfUE9SVD00NDMmU0VSVkVSX1BST1RPQ09MPUhUVFAlMkYxLjE=; EmpFil=0101; TPSessionId=3348A4F4-155E-4E3F-9B23-52E22F0B970A; TPToken=2529f2bf-e592-4136-9ba6-9738a041749e; TPSessionPathModule=Home.aspx?modulo=SCM&empresa=Pedreirahvb; codigoUsuario=000012; Config_EmpFil=0101; Config_EmpFilDescricao=PEDREIRA%20HVB; Config_EmpFilLogotipo=%2FESB%2FResourceFiles%2FgetImagem.ashx%3Fimg1%3D%2FEmpresas%2FPedreirahvb%2FImages%2Flogo_0101.png%26img2%3D%2FEmpresas%2FPedreirahvb%2FImages%2Flogo.png; _ga_HXV619MDW5=GS2.1.s1778842004$o212$g1$t1778842761$j60$l0$h0'

                }

            }

        );

        console.log('====================');
        console.log('RESPOSTA API');
        console.log('====================');

        console.log(response.data);

    } catch (error) {

        console.log('====================');
        console.log('ERRO');
        console.log('====================');

        console.log(error.response?.data || error.message);

    }

}

testar();