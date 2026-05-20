function buscarProduto(
    pergunta,
    produtos
) {

    const texto =
        pergunta.toLowerCase();

    for (

        const produto of produtos

    ) {

        const nomeProduto =

            produto.nome
                .toLowerCase();

        if (

            texto.includes(
                nomeProduto
            )

        ) {

            return produto;

        }

    }

    return null;

}

module.exports =
    buscarProduto;