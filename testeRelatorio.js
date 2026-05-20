const extrairRelatorioVendas =
require(
    './services/comercial/extrairRelatorioVendas'
);

const salvarRelatorioVendas =
require(
    './services/comercial/salvarRelatorioVendas'
);

const consultarRelatorioVendas =
require(
    './services/comercial/consultarRelatorioVendas'
);

// =========================
// RELATÓRIO TESTE
// =========================

const texto = `

📊 Relatório de Vendas Diário - Grupo Britec

📅 Data: 18/05/2026 (Segunda)

💰 Valor Total do Faturamento: 226,35 mil

🏗️ Quantidade Total Vendida: 1.823,86 t

👤 Vendas por Vendedor:

JOSE TERCIO: 98,75 mil
MARCELO DIAS: 69,61 mil
RAILTON MENDES DOS SANTOS: 49,65 mil
ADMINISTRATIVO: 8,35 mil

🏆 Top 10 Clientes:

CBC CONSTRUTORA BRASIL CENTRAL LTDA — 71.916,90
STADIUM CONSTRUTORA LTDA - EPP — 22.107,65
CONSORCIO CFJ — 14.605,92
AR CONSTRUCAO E PAVIMENTACAO LTDA — 12.711,63
MUNICIPIO DE PONTALINA — 11.524,80
ESCARPAS DO CORUMBA EMPREENDIMENTOS LTDA — 8.347,60
R V RAÇÕES LTDA — 8.183,20
M.FORTES ENGENHARIA E CONSTRU CIVIL LTDA — 8.084,50
REAL TRANSPORTES E MATERIAIS DE CONSTRUCAO LTDA — 6.412,00
CANEDO PREMOLDADOS LTDA — 5.834,40

📦 Produtos Mais Vendidos:

CBUQ FAIXA C (MASSA ASFÁLTICA): 606,61 t (94,02 mil)
AREIA DE BRITA: 413,43 t (28,77 mil)
BRITA 0: 390,45 t (40,33 mil)
PÓ DE BRITA: 159,13 t (13,16 mil)
BRITA 1: 123,79 t (10,85 mil)
ULTRASFALTO - CAP CLIENTE: 66,29 t (10,44 mil)
CBUQ FAIXA C (CAP CLIENTE): 29,50 t (16,27 mil)
ULTRASFALTO: 23,52 t (11,52 mil)
BRITA GRADUADA SIMPLES: 11,14 t (0,99 mil)

`;

// =========================
// EXTRAI
// =========================

const relatorio =

    extrairRelatorioVendas(
        texto
    );

// =========================
// MOSTRA
// =========================

console.log(
    relatorio
);

// =========================
// SALVA
// =========================

salvarRelatorioVendas(
    relatorio
);

// =========================
// CONSULTA
// =========================

const resultado =

    consultarRelatorioVendas(
        '18/05/2026',
        'qual produto mais vendido'
    );

// =========================
// RESULTADO
// =========================

console.log(
    resultado
);