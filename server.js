const express = require('express');

const cors = require('cors');

// =========================
// ROTAS
// =========================

const pedidosRoute =
    require('./routes/pedidos');

const financeiroRoute =
    require('./routes/financeiro');

// =========================
// APP
// =========================

const app = express();

app.use(cors());

app.use(express.json());

// =========================
// ROTAS API
// =========================

app.use(pedidosRoute);

app.use(financeiroRoute);

// =========================
// START SERVER
// =========================

app.listen(3000, () => {

    console.log(
        '=========================='
    );

    console.log(
        'SERVIDOR SABADO ONLINE'
    );

    console.log(
        'PORTA: 3000'
    );

    console.log(
        'ROTAS:'
    );

    console.log(
        'POST /pedido'
    );

    console.log(
        'POST /financeiro'
    );

    console.log(
        '=========================='
    );

});