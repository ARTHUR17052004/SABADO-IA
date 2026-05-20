const readline =
    require('readline');

const extrairRelatorioVendas =
require(
    './services/comercial/extrairRelatorioVendas'
);

const salvarRelatorioVendas =
require(
    './services/comercial/salvarRelatorioVendas'
);

// =========================
// LEITOR TERMINAL
// =========================

const rl =
    readline.createInterface({

        input:
            process.stdin,

        output:
            process.stdout

    });

// =========================
// INICIA
// =========================

console.log(`
=================================
COLE O RELATÓRIO COMPLETO
=================================

Finalize com:
CTRL + Z
depois ENTER

=================================
`);

let textoCompleto = '';

// =========================
// RECEBE LINHAS
// =========================

rl.on(

    'line',

    linha => {

        textoCompleto +=
            linha + '\n';

    }

);

// =========================
// FINALIZA
// =========================

rl.on(

    'close',

    () => {

        console.log(`
=================================
PROCESSANDO RELATÓRIO
=================================
`);

        const relatorio =

            extrairRelatorioVendas(
                textoCompleto
            );

        if (!relatorio) {

            console.log(
                'Erro ao extrair relatório.'
            );

            return;

        }

        salvarRelatorioVendas(
            relatorio
        );

        console.log(`
=================================
RELATÓRIO SALVO
=================================
`);

        console.log(
            JSON.stringify(
                relatorio,
                null,
                2
            )
        );

    }

);