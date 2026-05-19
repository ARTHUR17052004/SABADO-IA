module.exports = async function consultarFornecedor(page, fornecedor) {

    console.log("INICIANDO CONSULTA FORNECEDOR");

    // limpa comprador
    await page.select('#ddlComprador', '');

    console.log("COMPRADOR LIMPO");

    // status = todos
    await page.select('#ddlStatus', 'T');

    console.log("STATUS ALTERADO");

    // abre campo fornecedor
    await page.click('#s2id_ddlFornecedor .select2-choice');

    console.log("CAMPO FORNECEDOR ABERTO");

    // espera input aparecer
    await page.waitForSelector('#s2id_autogen1_search');

    // digita fornecedor
    await page.type('#s2id_autogen1_search', fornecedor);

    console.log("FORNECEDOR DIGITADO");

    // pequena pausa
    await new Promise(resolve => setTimeout(resolve, 1500));

    // seleciona primeiro resultado
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    console.log("FORNECEDOR SELECIONADO");

    // botão buscar
    await page.click('#btnFiltrar');

    console.log("PESQUISA EXECUTADA");

    // espera tabela carregar
    await new Promise(resolve => setTimeout(resolve, 3000));

    // pega primeira linha
    const dados = await page.evaluate(() => {

        const linha = document.querySelector('#tbl_scmPedidosCompra tbody tr');

        if (!linha) {
            return null;
        }

        const colunas = linha.querySelectorAll('td');

        return {
            pedido: colunas[0]?.innerText.trim(),
            tipo: colunas[1]?.innerText.trim(),
            fornecedor: colunas[2]?.innerText.trim(),
            comprador: colunas[3]?.innerText.trim(),
            moeda: colunas[4]?.innerText.trim(),
            total: colunas[5]?.innerText.trim(),
            saldo: colunas[6]?.innerText.trim(),
            prioridade: colunas[7]?.innerText.trim(),
            emissao: colunas[8]?.innerText.trim(),
            entrega: colunas[9]?.innerText.trim(),
            aprovacao: colunas[10]?.innerText.trim()
        };

    });

    console.log("DADOS EXTRAIDOS:", dados);

    return dados;

}