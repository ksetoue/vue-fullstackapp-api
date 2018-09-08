const express = require('express');

const postsController = express.Router();

postsController.get('/', (req, res) => {
    res.status(200).json({
        data: []
    });
});

postsController.post('/', (req, res) => { // Criar 
    res.status(201).json({
        data: {}
    });
});

postsController.put('/:id', (req, res) => { // Alterar Tudo
    res.status(200).json({
        data: {}
    });
});

postsController.patch('/:id', (req, res) => { // Altera somente o enviado
    res.status(200).json({
        data: {}
    });
});

postsController.delete('/:id', (req, res) => {
    res.status(204).end();
});

module.exports = postsController;