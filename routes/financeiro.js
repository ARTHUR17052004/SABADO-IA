const express = require('express');

const router = express.Router();

const { exec } =
    require('child_process');

// =========================
// POST /financeiro
// =========================

router.post(

    '/financeiro',

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
            // EXECUTA WORKFLOW
            // =====================

            exec(

                `node workflowFinanceiro.js "${pergunta}"`,

                (erro, stdout, stderr) => {

                    // =================
                    // ERRO
                    // =================

                    if (erro) {

                        console.log(
                            erro
                        );

                        return res.status(500).json({

                            sucesso: false,

                            erro:
                                erro.message

                        });

                    }

                    // =================
                    // RESPOSTA
                    // =================

                    return res.json({

                        sucesso: true,

                        tipo:
                            'financeiro',

                        resposta:
                            stdout

                    });

                }

            );

        } catch (error) {

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