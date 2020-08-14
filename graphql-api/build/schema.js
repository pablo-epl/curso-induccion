'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = undefined;

var _mergeGraphqlSchemas = require('merge-graphql-schemas');

var _apolloServerExpress = require('apollo-server-express');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Leyendo el schema de GraphQL
const Gene = _apolloServerExpress.gql`${_fs2.default.readFileSync('./src/geneService/geneSchema.graphql').toString()}`;

const typeDefs = exports.typeDefs = (0, _mergeGraphqlSchemas.mergeTypes)([Gene], { all: true });