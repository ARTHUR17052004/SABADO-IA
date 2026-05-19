const axios =
    require('axios');

// ==========================
// CONSULTAR PEDIDOS POR DATA
// ==========================

async function consultarPedidosPorData(
    data
) {

    try {

        console.log(
            '=========================='
        );

        console.log(
            'CONSULTANDO PEDIDOS POR DATA'
        );

        console.log(
            'DATA:',
            data
        );

        console.log(
            '=========================='
        );

        // ==========================
        // FORMATA DATA
        // 04/05/2026 -> 20260504
        // ==========================

        const partes =
            data.split('/');

        const dataFormatada =

            `${partes[2]}${partes[1]}${partes[0]}`;

        // ==========================
        // PAYLOAD
        // ==========================

        const payload = {

            COMPANY_ID:
                'Pedreirahvb',

            EmpFil:
                '0101',

            moduloAtivo:
                'SCM',

            funcao:
                'TPCS.WSGETCONS',

            data1:
                JSON.stringify([

                    {
                        Nome: 'CONSULTA',
                        Conteudo: 'SCM030',
                        Tipo: 'C'
                    },

                    {
                        Nome: 'PSH_ID',
                        Conteudo: 'ALL',
                        Tipo: 'C'
                    },

                    {
                        Nome: 'C7_FILENT',
                        Conteudo: 'ALL',
                        Tipo: 'C'
                    },

                    {
                        Nome: 'STATUS',
                        Conteudo: 'ALL',
                        Tipo: 'C'
                    },

                    {
                        Nome: 'EMISSAODE',
                        Conteudo: dataFormatada,
                        Tipo: 'C'
                    },

                    {
                        Nome: 'EMISSAOATE',
                        Conteudo: dataFormatada,
                        Tipo: 'C'
                    },

                    {
                        Nome: 'TPEMPRESA',
                        Conteudo: 'ALL',
                        Tipo: 'C'
                    },

                    {
                        Nome: 'FORNECEDOR',
                        Conteudo: 'ALL',
                        Tipo: 'C'
                    },

                    {
                        Nome: 'RESIDUO',
                        Conteudo: 'ALL',
                        Tipo: 'C'
                    },

                    {
                        Nome: 'C7_CONAPRO',
                        Conteudo: 'ALL',
                        Tipo: 'C'
                    },

                    {
                        Nome: 'C7_COMPRA',
                        Conteudo: 'ALL',
                        Tipo: 'C'
                    },

                    {
                        Nome: 'C7_NUM',
                        Conteudo: 'ALL',
                        Tipo: 'C'
                    },

                    {
                        Nome: 'C7_NUMSC',
                        Conteudo: 'ALL',
                        Tipo: 'C'
                    },

                    {
                        Nome: 'C7_NUMPS0',
                        Conteudo: 'ALL',
                        Tipo: 'C'
                    },

                    {
                        Nome: 'C7_CODPLA',
                        Conteudo: 'ALL',
                        Tipo: 'C'
                    },

                    {
                        Nome: 'C7_FILIAL',
                        Conteudo: 'ALL',
                        Tipo: 'C'
                    },

                    {
                        Nome: 'C7_GRUPCOM',
                        Conteudo: 'ALL',
                        Tipo: 'C'
                    },

                    {
                        Nome: 'C7_CO',
                        Conteudo: 'ALL',
                        Tipo: 'C'
                    },

                    {
                        Nome: 'ENTREGA_NF',
                        Conteudo: 'S',
                        Tipo: 'C'
                    },

                    {
                        Nome: 'CAMPOSCUSTOM',
                        Conteudo: 'IN:',
                        Tipo: 'C'
                    },

                    {
                        Nome: 'CAMPOSCUSTOMGROUP',
                        Conteudo: 'IN:',
                        Tipo: 'C'
                    },

                    {
                        Nome: 'WHERECUSTOM',
                        Conteudo: 'IN: AND C7_FILIAL = XFILIAL(SC7)',
                        Tipo: 'C'
                    },

                    {
                        Nome: 'STATUS_TT',
                        Conteudo: "IN: 'ALL'",
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

                ])

        };

        // ==========================
        // REQUISIÇÃO
        // ==========================

        const response =
            await axios.post(

                'https://pedreirahvb.goevo.net/ESB/ResourceFiles/wsSendUPD.ashx?COMPANY_ID=Pedreirahvb&EmpFil=0101&moduloAtivo=SCM',

                new URLSearchParams(
                    payload
                ),

                {

                    headers: {

                        'Content-Type':
                            'application/x-www-form-urlencoded',

                        'Cookie':

                            'ASP.NET_SessionId=fyp2jmibfdbejontoxroeybi; codigoUsuario=000012; COMPANY_ID=Pedreirahvb; Config_EmpFil=0101; EmpFil=0101; TPANCID=ba3f9aa6-7f8d-4dda-9957-6c2198d1e177; TPSessionId=90DA2DA3-2C31-4857-AABB-F7F05910E2D8; TPSessionPathModule=Home.aspx?modulo=SCM&empresa=Pedreirahvb; TPToken=6034f853-632e-4eda-905f-ab8b21378994'

                    }

                }

            );

        // ==========================
        // RETORNO
        // ==========================

        let retorno;

        if (

            typeof response.data
            === 'string'

        ) {

            retorno =
                JSON.parse(
                    response.data
                );

        } else {

            retorno =
                response.data;

        }

        // ==========================
        // SEM CONTENT
        // ==========================

        if (

            !retorno.content

        ) {

            return {

                totalPedidos: 0,

                totalComprado: 0,

                pedidos: []

            };

        }

        // ==========================
        // PARSE CONTENT
        // ==========================

        const conteudo =

            JSON.parse(
                retorno.content
            );

        // ==========================
        // DADOS
        // ==========================

        const dados =

            conteudo.result
                .content
                .listofdata
                .data;

        // ==========================
        // SEM DADOS
        // ==========================

        if (

            !dados ||
            dados.length === 0

        ) {

            return {

                totalPedidos: 0,

                totalComprado: 0,

                pedidos: []

            };

        }

        // ==========================
        // ARRAY
        // ==========================

        const pedidos =

            Array.isArray(dados)
                ? dados
                : [dados];

        // ==========================
        // SOMA
        // ==========================

        let totalComprado = 0;

        for (const pedido of pedidos) {

            totalComprado +=

                Number(
                    pedido.C7_TOTAL || 0
                );

        }

        // ==========================
        // FORMATAR
        // ==========================

        const pedidosFormatados =

            pedidos.map(pedido => ({

                numero:
                    pedido.C7_NUM,

                fornecedor:
                    pedido.A2_NOME.trim(),

                comprador:
                    pedido.Y1_NOME.trim(),

                valor:
                    Number(
                        pedido.C7_TOTAL || 0
                    ),

                saldo:
                    Number(
                        pedido.SALDO || 0
                    ),

                status:
                    pedido.PSE_STATUS || 'SEM STATUS',

                emissao:
                    pedido.C7_EMISSAO,

                entrega:
                    pedido.C7_DATPRF

            }));

        // ==========================
        // RETORNO FINAL
        // ==========================

        return {

            totalPedidos:
                pedidos.length,

            totalComprado,

            pedidos:
                pedidosFormatados

        };

    } catch (erro) {

        console.log(
            '=========================='
        );

        console.log(
            'ERRO CONSULTA DATA'
        );

        console.log(
            erro.message
        );

        console.log(
            '=========================='
        );

        return {

            totalPedidos: 0,

            totalComprado: 0,

            pedidos: []

        };

    }

}

module.exports =
    consultarPedidosPorData;