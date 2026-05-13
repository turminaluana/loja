const mongoose = requise('mongoose');

const Produto = mongoose.model('Produto', {
    nome: String,
    preco: Number,
    descricao: String
});

module.exports = Produto;