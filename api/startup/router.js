const express = require('express');
const ProdutoRouter = require('../src/routes/ProdutoRouter');

module.exports = (app) => {
    app.use(express.json());
    app.use('/produtos', ProdutoRouter );
};