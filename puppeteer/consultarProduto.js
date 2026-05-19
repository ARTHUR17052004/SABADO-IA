module.exports = async function consultarProduto(page, produto) {

    console.log("INICIANDO CONSULTA PRODUTO");

    // espera campo aparecer
    await page.waitForSelector('input[placeholder*="Código"]');

    console.log("CAMPO ENCONTRADO");

    // limpa campo
    await page.click(
        'input[placeholder*="Código"]',
        { clickCount: 3 }
    );

    await page.keyboard.press('Backspace');

    console.log("CAMPO LIMPO");

    // digita produto
    await page.type(
        'input[placeholder*="Código"]',
        produto,
        { delay: 50 }
    );

    console.log("PRODUTO DIGITADO");

    // pequena pausa
    await new Promise(resolve => setTimeout(resolve, 1000));

    // clica botão pesquisar
    await page.click('.btn-info');

    console.log("BUSCA REALIZADA");

    // espera resultado carregar
    await new Promise(resolve => setTimeout(resolve, 5000));

    // espera tabela
    await page.waitForSelector('table tbody tr');

    console.log("TABELA ENCONTRADA");

    // extrai dados
    const dados = await page.evaluate(() => {

        const linha = document.querySelector('table tbody tr');

        if (!linha) {

            return {
                erro: "Produto não encontrado"
            };

        }

        const colunas = linha.querySelectorAll('td');

        return {

            codigo: colunas[1]?.innerText?.trim() || '',

            descricao: colunas[2]?.innerText?.trim() || '',

            unidade: colunas[3]?.innerText?.trim() || '',

            tipo: colunas[4]?.innerText?.trim() || '',

            grupo: colunas[5]?.innerText?.trim() || ''

        };

    });

    console.log("DADOS EXTRAIDOS:", dados);

    return dados;

}