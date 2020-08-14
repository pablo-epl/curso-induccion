'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

var _schema = require('./schema');

var _geneResolver = require('./geneService/geneResolver');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Conectando a la base de datos
const uri = 'mongodb+srv://cursoccg:cursoccg@datamarts.iahyj.mongodb.net/datamarts';
_mongoose2.default.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

//Definir el servidor de GraphQL
const server = new _apolloServerExpress.ApolloServer({
	playground: true,
	typeDefs: _schema.typeDefs,
	resolvers: _geneResolver.resolvers
});
const app = (0, _express2.default)();
server.applyMiddleware({ app });

//Levantando el servidor
const servExpress = app.listen(4000, () => console.log(`El servidor está disponible en http://localhost:${servExpress.address().port}${server.graphqlPath}`));