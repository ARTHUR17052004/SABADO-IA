const tratarTempo =
require('./services/ia/tratarTempo');

const {
    obterDataAtual
} = require('./services/ia/tempo');

const gerarAlertas =
require('./services/ia/gerarAlertas');

const metricas =
require('./core/metricas');

const contexto =
require('./core/contexto');

const raciocinarItens =
require('./services/ia/raciocinarItens');

const resolverReferencia =
require('./services/ia/resolverReferencia');

const analisarPedido =
require('./services/ia/analisarPedido');

const compararPedidos =
require('./services/ia/compararPedidos');

const tratarPerguntaFornecedor =
require('./services/goevo/fornecedor/tratarPerguntaFornecedor');

const classificarIntencao =
require('./services/ia/classificarIntencao');

const memoria =
require('./core/memoria');

const buscarPedido =
require('./services/goevo/pedido');

const tratarPerguntaPedido =
require('./services/goevo/pedido/tratarPerguntaPedido');

const extrairNumeroPedido =
require('./services/goevo/pedido/extrairNumeroPedido');

const consultarItens =
require('./services/goevo/pedido/consultarItens');

const tratarItens =
require('./services/goevo/pedido/tratarItens');

const {
    salvarMemoriaItens
} = require('./services/goevo/pedido/memoriaItens');

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
            'Nenhuma pergunta enviada.'
        );

        return;

    }

    // =====================
    // DATA ATUAL
    // =====================

    const tempoAtual =
        obterDataAtual();

    console.log(
        'DATA ATUAL:',
        tempoAtual.data
    );

    console.log(
        'HORA ATUAL:',
        tempoAtual.hora
    );

    // =====================
    // TEMPO
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
    // INTENÇÃO
    // =====================

    const intencao =
        classificarIntencao(
            pergunta
        );

    console.log(
        'INTENÇÃO:',
        intencao
    );

    // =====================
    // COMPARAÇÃO
    // =====================

    const numeros =
        pergunta.match(/\d+/g);

    if (

        pergunta.includes('compar')

        &&

        numeros?.length >= 2

    ) {

        const pedido1 =
            numeros[0]
                .padStart(6, '0');

        const pedido2 =
            numeros[1]
                .padStart(6, '0');

        const respostaComparacao =

            await compararPedidos(
                pedido1,
                pedido2
            );

        console.log(
            respostaComparacao
        );

        return;

    }

    // =====================
    // EXTRAI PEDIDO
    // =====================

    let numeroPedido =

        extrairNumeroPedido(
            pergunta
        );

    // =====================
    // REFERÊNCIA
    // =====================

    const referencia =

        resolverReferencia(
            pergunta
        );

    if (

        !numeroPedido &&

        referencia

    ) {

        numeroPedido =
            referencia;

    }

    // =====================
    // MEMÓRIA
    // =====================

    if (

        !numeroPedido &&

        memoria.ultimoPedido

    ) {

        numeroPedido =
            memoria.ultimoPedido;

    }

    // =====================
    // SEM PEDIDO
    // =====================

    if (!numeroPedido) {

        console.log(
            'Não encontrei número do pedido.'
        );

        return;

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

        intencao === 'ITENS'

        ||

        intencao === 'ITEM_MAIS_CARO'

        ||

        intencao === 'MAIOR_QUANTIDADE'

        ||

        intencao === 'RESUMO'

    ) {

        const itens =

            await consultarItens(
                numeroPedido
            );

        salvarMemoriaItens(
            itens
        );

        let respostaItens =

            raciocinarItens(
                pergunta,
                itens
            );

        // FALLBACK

        if (!respostaItens) {

            respostaItens =

                tratarItens(
                    itens,
                    numeroPedido
                );

        }

        console.log(
            respostaItens
        );

        return;

    }

    // =====================
    // CONSULTA PEDIDO
    // =====================

    const pedido =

        await buscarPedido(
            numeroPedido
        );

    // =====================
    // ANÁLISE IA
    // =====================

    let resposta =

        analisarPedido(
            pergunta,
            pedido
        );

    // =====================
    // FORNECEDOR
    // =====================

    if (!resposta) {

        resposta =

            tratarPerguntaFornecedor(
                pergunta,
                pedido
            );

    }

    // =====================
    // FALLBACK PEDIDO
    // =====================

    if (!resposta) {

        resposta =

            tratarPerguntaPedido(
                pergunta,
                pedido
            );

    }

    // =====================
    // ALERTAS
    // =====================

    const alertas =

        gerarAlertas(
            pedido
        );

    if (alertas) {

        resposta +=
            '\n' + alertas;

    }

    // =====================
    // FINAL
    // =====================

    console.log(
        resposta
    );

}

executar();