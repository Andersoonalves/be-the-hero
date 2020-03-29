const express = require('express');

const OngContrller = require('./controllers/ongController');
const IncidentContrller = require('./controllers/incidentController');
const ProfileContrller = require('./controllers/ProfileController');
const SessionContrller = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/session', SessionContrller.create);

routes.get('/ongs', OngContrller.index);
routes.post('/ongs', OngContrller.create);

routes.get('/profile', ProfileContrller.index)

routes.get('/incidents', IncidentContrller.index);
routes.post('/incidents', IncidentContrller.create);
routes.delete('/incidents/:id', IncidentContrller.delete);


module.exports = routes;