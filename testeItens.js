const consultarItens = require('./services/goevo/pedido/consultarItens');

(async () => {

    const dados = await consultarItens('002821');

    console.log(dados);

})();