const express = require('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController');
const ContentController = require('./controllers/ContentController');
const PriorityController = require('./controllers/PriorityController');

//Criar, Ler e deletar anotações
routes.post('/annotations', AnnotationController.create);
routes.get('/annotations' , AnnotationController.read);
routes.delete('/annotations/:id', AnnotationController.delete);

//Controle da prioridade
routes.get('/priorities', PriorityController.read);
routes.post('/priorities/:id', PriorityController.update);

//Controle do texto
routes.post('/contents/:id', ContentController.update);
module.exports = routes;