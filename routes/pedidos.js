const express = require('express');

const router = express.Router();

// =========================
// MEMÓRIA
// =========================

const memoria =
    require('../core/memoria');

// =========================
// SERVIÇOS PEDIDOS
// =========================

const buscarPedido =
    require('../services/goevo/pedido');

const consultarItens =
    require('../services/goevo/pedido/consultarItens');

const tratarItens =
    require('../services/goevo/pedido/tratarItens');

const tratarPerguntaPedido =
    require('../services/goevo/pedido/tratarPerguntaPedido');

const extrairNumeroPedido =
    require('../services/goevo/pedido/extrairNumeroPedido');

// =========================
// POST /pedido
// =========================

router.post(
    '/pedido',

    async (req, res) => {

        try {

            // =====================
            // PERGUNTA
            // =====================

            const pergunta =
                req.body.pergunta;

            // =====================
            // VALIDA
            // =====================

            if (!pergunta) {

                return res.status(400).json({

                    sucesso: false,

                    erro:
                        'Pergunta não enviada'

                });

            }

            // =====================
            // EXTRAI PEDIDO
            // =====================

            let numeroPedido =

                extrairNumeroPedido(
                    pergunta
                );

            // =====================
            // MEMÓRIA
            // =====================

            if (!numeroPedido) {

                numeroPedido =
                    memoria.ultimoPedido;

            }

            // =====================
            // SEM PEDIDO
            // =====================

            if (!numeroPedido) {

                return res.status(400).json({

                    sucesso: false,

                    erro:
                        'Número do pedido não encontrado'

                });

            }

            // =====================
            // SALVA MEMÓRIA
            // =====================

            memoria.ultimoPedido =
                numeroPedido;

            // =====================
            // CONSULTA ITENS
            // =====================

            if (

                pergunta.includes('item')

                ||

                pergunta.includes('itens')

                ||

                pergunta.includes('produto')

                ||

                pergunta.includes('produtos')

            ) {

                const itens =

                    await consultarItens(
                        numeroPedido
                    );

                const respostaItens =

                    tratarItens(
                        itens,
                        numeroPedido
                    );

                return res.json({

                    sucesso: true,

                    tipo: 'itens',

                    resposta:
                        respostaItens,

                    itens

                });

            }

            // =====================
            // CONSULTA PEDIDO
            // =====================

            const pedido =

                await buscarPedido(
                    numeroPedido
                );

            // =====================
            // GERA RESPOSTA
            // =====================

            const resposta =

                tratarPerguntaPedido(
                    pergunta,
                    pedido
                );

            // =====================
            // RETORNO
            // =====================

            return res.json({

                sucesso: true,

                tipo: 'pedido',

                resposta,

                pedido

            });

        } catch (error) {

            console.log(
                'ERRO ROTA PEDIDO'
            );

            console.log(
                error
            );

            return res.status(500).json({

                sucesso: false,

                erro:
                    error.message

            });

        }

    }

);

module.exports = router;