const interpretarModulo =
require(
    './core/interpretadorGlobal'
);

const interpretarData =
require(
    './core/interpretadorData'
);

const tratarTempo =
require(
    './services/ia/tratarTempo'
);

const {

    salvarMemoria

} = require(
    './core/memoriaGlobal'
);

const { exec } =
require(
    'child_process'
);

// =========================
// EXECUTAR
// =========================

async function executar() {

    // =====================
    // PERGUNTA
    // =====================

    const pergunta =
        process.argv[2];

    // =====================
    // VALIDA
    // =====================

    if (!pergunta) {

        console.log(
            'Pergunta não enviada.'
        );

        return;

    }

    // =====================
    // TEMPO GLOBAL
    // =====================

    const respostaTempo =

        tratarTempo(
            pergunta
        );

    if (respostaTempo) {

        console.log(
            respostaTempo
        );

        return;

    }

    // =====================
    // INTERPRETA DATA
    // =====================

    const data =

        interpretarData(
            pergunta
        );

    // =====================
    // SALVA DATA
    // =====================

    if (data) {

        salvarMemoria(
            'ultimaData',
            data
        );

    }

    // =====================
    // IDENTIFICA MÓDULO
    // =====================

    const modulo =

        interpretarModulo(
            pergunta
        );

    // =====================
    // SALVA MÓDULO
    // =====================

    salvarMemoria(
        'ultimoModulo',
        modulo
    );

    // =====================
    // SALVA PERGUNTA
    // =====================

    salvarMemoria(
        'ultimaPergunta',
        pergunta
    );

    console.log(`

=========================
SABADO CORE
=========================

🧠 Módulo:
${modulo}

📅 Data:
${data || 'não identificada'}

=========================

`);

    // =====================
    // COMERCIAL
    // =====================

    if (
        modulo === 'comercial'
    ) {

        exec(

            `node workflowComercial.js "${pergunta}"`,

            (

                erro,
                stdout

            ) => {

                if (erro) {

                    console.log(
                        erro.message
                    );

                    return;

                }

                console.log(
                    stdout
                );

            }

        );

        return;

    }

    // =====================
    // PEDIDOS
    // =====================

    if (
        modulo === 'pedido'
    ) {

        exec(

            `node workflowPedido.js "${pergunta}"`,

            (

                erro,
                stdout

            ) => {

                if (erro) {

                    console.log(
                        erro.message
                    );

                    return;

                }

                console.log(
                    stdout
                );

            }

        );

        return;

    }

    // =====================
    // FINANCEIRO
    // =====================

    if (
        modulo === 'financeiro'
    ) {

        exec(

            `node workflowFinanceiro.js "${pergunta}"`,

            (

                erro,
                stdout

            ) => {

                if (erro) {

                    console.log(
                        erro.message
                    );

                    return;

                }

                console.log(
                    stdout
                );

            }

        );

        return;

    }

    // =====================
    // INTERNET
    // =====================

    if (
        modulo === 'internet'
    ) {

        console.log(
            'Módulo internet ainda em construção.'
        );

        return;

    }

    // =====================
    // NÃO ENTENDI
    // =====================

    console.log(
        'Não consegui identificar o módulo.'
    );

}

executar();