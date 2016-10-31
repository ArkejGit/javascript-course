'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
var Joi = require('joi');
server.connection({ port: 3000 });

server.route({
	method: 'GET',
	path: '/article/{id}',
	handler: function(req, res) {
		res('Id artykułu = ' + req.params.id);
	},
	config: {
		validate: {
			params: {
				id: Joi.number()
			}
		}
	}
});

server.start();