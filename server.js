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

            // =====================
            // PERGUNTA
            // =====================

            const pergunta =
                req.body.pergunta;

            // =====================
            // VALIDA
            // =====================

            if (!pergunta) {

                return res.status(400)
                .json({

                    sucesso: false,

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

                    // =================
                    // ERRO
                    // =================

                    if (erro) {

                        return res.status(500)
                        .json({

                            sucesso: false,

                            erro:
                            erro.message

                        });

                    }

                    // =================
                    // RETORNO
                    // =================

                    return res.json({

                        sucesso: true,

                        resposta:
                        stdout.trim()

                    });

                }

            );

        }

        catch (erro) {

            return res.status(500)
            .json({

                sucesso: false,

                erro:
                erro.message

            });

        }

    }

);

// =========================
// EXPORT
// =========================

module.exports =
router;