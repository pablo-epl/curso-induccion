'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.geneController = undefined;

var _geneModel = require('./geneModel');

class geneController {
	static async getAllGenes(limit = 10, page) {
		return _geneModel.Gene.find({}).limit(limit).skip(page * limit);
	}

	static async getGenesBy(id, name) {
		let filter = {};
		filter = { 'geneInfo.name': name };
		if (id !== undefined) filter = { 'geneInfo.id': id };
		return _geneModel.Gene.find(filter);
	}
}

exports.geneController = geneController;