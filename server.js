const express =
require('express');

const cors =
require('cors');

// =========================
// ROTAS
// =========================

const pedidosRoute =
require('./routes/pedidos');

const financeiroRoute =
require('./routes/financeiro');

const comercialRoute =
require('./routes/comercial');

// =========================
// APP
// =========================

const app =
express();

app.use(cors());

app.use(express.json());

// =========================
// ROTAS
// =========================

app.use(pedidosRoute);

app.use(financeiroRoute);

app.use(comercialRoute);

// =========================
// START
// =========================

app.listen(3000, () => {

    console.log(
`==========================
SERVIDOR SABADO ONLINE
PORTA: 3000

ROTAS:
POST /pedido
POST /financeiro
POST /comercial
==========================`
    );

});