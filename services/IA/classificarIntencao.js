function classificarIntencao(
    pergunta
) {

    const texto =
        pergunta.toLowerCase();

    // =========================
    // MAPA SEMÂNTICO
    // =========================

    const intencoes = {

        // =====================
        // ITENS
        // =====================

        ITENS: [

            'item',
            'itens',
            'produto',
            'produtos',
            'material',
            'materiais'

        ],

        // =====================
        // ITEM MAIS CARO
        // =====================

        ITEM_MAIS_CARO: [

            'mais caro',
            'maior valor',
            'mais custoso',
            'mais alto',
            'mais pesado'

        ],

        // =====================
        // MAIOR QUANTIDADE
        // =====================

        MAIOR_QUANTIDADE: [

            'maior quantidade',
            'mais quantidade',
            'maior volume'

        ],

        // =====================
        // RESUMO
        // =====================

        RESUMO: [

            'resumo',
            'resume',
            'resumir'

        ],

        // =====================
        // FORNECEDOR
        // =====================

        FORNECEDOR: [

            'fornecedor',
            'empresa'

        ],

        // =====================
        // EMAIL
        // =====================

        EMAIL: [

            'email',
            'e-mail'

        ],

        // =====================
        // CNPJ
        // =====================

        CNPJ: [

            'cnpj'

        ],

        // =====================
        // COMPARAÇÃO
        // =====================

        COMPARAR: [

            'comparar',
            'compare',
            'diferença'

        ],

        // =====================
        // FINANCEIRO
        // =====================

        FINANCEIRO: [

            'quanto compramos',
            'compramos',
            'total comprado',
            'gasto',
            'financeiro',
            'compras do dia',
            'compras do mês'

        ]

    };

    // =========================
    // PROCESSA
    // =========================

    for (const nome in intencoes) {

        const palavras =
            intencoes[nome];

        const encontrou =

            palavras.some(

                palavra =>

                    texto.includes(
                        palavra
                    )

            );

        if (encontrou) {

            return nome;

        }

    }

    // =========================
    // PADRÃO
    // =========================

    return 'PEDIDO';

}

module.exports =
    classificarIntencao;