const axios = require('axios');

async function consultarItens(numeroPedido) {

    console.log('==========================');
    console.log('CONSULTANDO ITENS API');
    console.log('Pedido:', numeroPedido);
    console.log('==========================');

    try {

        const response = await axios.post(

            'https://pedreirahvb.goevo.net/ESB/ResourceFiles/wsSendUPD.ashx?COMPANY_ID=Pedreirahvb&EmpFil=0101&moduloAtivo=SCM',

            new URLSearchParams({

                COMPANY_ID: 'Pedreirahvb',
                EmpFil: '0101',
                moduloAtivo: 'SCM',

                data1: JSON.stringify([
                    {
                        Nome: 'CONSULTA',
                        Conteudo: 'SCM338',
                        Tipo: 'C'
                    },
                    {
                        Nome: 'C7_FILIAL',
                        Conteudo: '01',
                        Tipo: 'C'
                    },
                    {
                        Nome: 'C7_NUM',
                        Conteudo: numeroPedido,
                        Tipo: 'C'
                    },
                    {
                        Nome: 'ENTREGUE',
                        Conteudo: 'N',
                        Tipo: 'C'
                    },
                    {
                        Nome: 'EMPFIL_ADHOC',
                        Conteudo: '0101',
                        Tipo: 'C'
                    },
                    {
                        Nome: 'SELECT_CUSTOM',
                        Conteudo: 'IN: ',
                        Tipo: 'C'
                    },
                    {
                        Nome: 'LEFTJOIN_CUSTOM',
                        Conteudo: 'IN: ',
                        Tipo: 'C'
                    },
                    {
                        Nome: 'USUARIO',
                        Conteudo: '000012',
                        Tipo: 'C'
                    },
                    {
                        Nome: 'HEADER',
                        Conteudo: 'N',
                        Tipo: 'C'
                    },
                    {
                        Nome: 'EMPFIL',
                        Conteudo: '0101',
                        Tipo: 'C'
                    }
                ]),

                funcao: 'TPCS.WSGETCONS'

            }),

            {

                headers: {

                    'Content-Type':
                        'application/x-www-form-urlencoded; charset=UTF-8',

                    'Cookie':
                        'TPANCID=ba3f9aa6-7f8d-4dda-9957-6c2198d1e177; _ga=GA1.1.1134232633.1758111681; ASP.NET_SessionId=fyp2jmibfdbejontoxroeybi; COMPANY_ID=Pedreirahvb; TPUID=Q09NUEFOWV9JRD1QZWRyZWlyYWh2YiZIVFRQX0hPU1Q9cGVkcmVpcmFodmIuZ29ldm8ubmV0JlNFUlZFUl9OQU1FPXBlZHJlaXJhaHZiLmdvZXZvLm5ldCZTRVJWRVJfUE9SVD00NDMmU0VSVkVSX1BST1RPQ09MPUhUVFAlMkYxLjE=; EmpFil=0101; TPSessionId=3348A4F4-155E-4E3F-9B23-52E22F0B970A; TPToken=2529f2bf-e592-4136-9ba6-9738a041749e; TPSessionPathModule=Home.aspx?modulo=SCM&empresa=Pedreirahvb; codigoUsuario=000012'

                }

            }

        );

        // =========================
        // CONVERTE RETORNO
        // =========================

        const conteudo =
            JSON.parse(response.data.content);

        // =========================
        // PEGA ITENS
        // =========================

        let itens =
            conteudo.result.content.listofdata.data;

        // =========================
        // NORMALIZA ARRAY
        // =========================

        if (!Array.isArray(itens)) {

            itens = [itens];

        }

        // =========================
        // LIMPA DADOS
        // =========================

        const itensLimpos =
            itens.map(item => ({

                item:
                    item.C7_ITEM?.trim(),

                produto:
                    item.C7_PRODUTO?.trim(),

                descricao:
                    item.C7_DESCRI?.trim(),

                quantidade:
                    item.C7_QUANT,

                preco:
                    item.C7_PRECO,

                total:
                    item.C7_TOTAL,

                fornecedor:
                    item.A2_NOME?.trim()

            }));

        console.log('==========================');
        console.log('ITENS ENCONTRADOS');
        console.log('==========================');

        console.log(itensLimpos);

        return itensLimpos;

    } catch (erro) {

        console.log('==========================');
        console.log('ERRO API');
        console.log('==========================');

        console.log(erro.message);

        return [];

    }

}

module.exports = consultarItens;