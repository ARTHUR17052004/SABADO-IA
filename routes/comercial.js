const express =
    require('express');

const router =
    express.Router();

const { exec } =
    require('child_process');

// =========================
// POST /comercial
// =========================

router.post(

    '/comercial',

    async (req, res) => {

        try {

            const pergunta =
                req.body.pergunta;

            if (!pergunta) {

                return res.status(400).json({

                    sucesso: false,

                    erro:
                        'Pergunta não enviada'

                });

            }

            exec(

                `node workflowComercial.js "${pergunta}"`,

                (

                    erro,
                    stdout,
                    stderr

                ) => {

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

                    return res.json({

                        sucesso: true,

                        tipo:
                            'comercial',

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

module.exports =
    router;