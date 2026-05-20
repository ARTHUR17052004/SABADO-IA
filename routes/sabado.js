const express =
require('express');

const router =
express.Router();

const { exec } =
require('child_process');

// =========================
// SABADO CENTRAL
// =========================

router.post(
    '/',
    async (req, res) => {

        try {

            const pergunta =
                req.body.pergunta;

            // =====================
            // VALIDA
            // =====================

            if (!pergunta) {

                return res.status(400)
                    .json({

                        erro:
                            'Pergunta não enviada.'

                    });

            }

            // =====================
            // EXECUTA CENTRAL
            // =====================

            exec(

                `node workflowCentral.js "${pergunta}"`,

                (

                    erro,
                    stdout,
                    stderr

                ) => {

                    if (erro) {

                        return res.status(500)
                            .json({

                                erro:
                                    erro.message

                            });

                    }

                    return res.json({

                        sucesso: true,

                        resposta:
                            stdout

                    });

                }

            );

        } catch (erro) {

            return res.status(500)
                .json({

                    erro:
                        erro.message

                });

        }

    }

);

module.exports =
router;