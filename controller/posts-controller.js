const express = require('express');
const postsService = require('../service/posts/posts-service');

const postsController = express.Router();

function notFound (response, message = 'no posts found') {
    response.status(404).json({ message });
}

postsController.get('/', (req, res) => {
    postsService.getAll()
        .then((data) => {
            if (!data.length) {
                return notFound(res);
            }

            res.status(200).json({
                data
            });
        })
});

postsController.post('/', (req, res) => { // Criar 
    let body = req.body; 
    
    postsService.createPost(body)
        .then((data) => {
            res.status(201).json({
                data
            });
        })
        .catch((e) => {
            let message, statusCode;

            switch (e.name) {
                case 'TypeError':
                    statusCode = 400;
                    message = e.message;
            }

            res.status(statusCode).json({
                message
            });
        })

});

postsController.put('/:id', (req, res) => { // Alterar Tudo
    console.log(req.params.id);
    
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
    let id = req.params.id; 
    postsService.deletePost(id)
        .then((result) => {
            let modifiedCount = result.n;
            if (modifiedCount == 0) {
                return notFound(res, `no posts found for id: ${id}`);
            }
            res.status(204).end();
        })
        .catch((e) => {
            let message, statusCode; 

            switch (e.name) {
                case 'CastError': 
                    statusCode = 400;
                    message = e.message;
            }

            res.status(statusCode).json({ message });
        })
});

module.exports = postsController;