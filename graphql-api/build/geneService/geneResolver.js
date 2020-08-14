'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resolvers = undefined;

var _geneController = require('./geneController');

const resolvers = exports.resolvers = {
	Query: {
		getAllGenes: (root, { limit, page }) => _geneController.geneController.getAllGenes(limit, page),
		getGenesBy: (root, { id, name }) => _geneController.geneController.getGenesBy(id, name)
	}
};