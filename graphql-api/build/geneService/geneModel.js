'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Gene = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const evidenceReferencesSchema = new _mongoose2.default.Schema({
	evidenceName: String,
	evidenceCode: String,
	evidenceType: String,
	referenceID: String,
	referenceURL: String,
	referenceCitation: String
});

const externalCrossReferencesSchema = new _mongoose2.default.Schema({
	id: String,
	name: String,
	url: String
});

const geneInfoSchema = new _mongoose2.default.Schema({
	id: String,
	name: String,
	leftEndPosition: Number,
	rightEndPosition: Number,
	strand: String,
	sequence: String,
	gcContent: Number,
	centisomePosition: Number,
	note: String,
	type: String,
	synonyms: [String],
	terms: [{
		multifun: [[String]],
		geneOntology: {
			cellularComponent: [{
				id: String,
				name: String
			}],
			molecularFunction: [{
				id: String,
				name: String
			}],
			biologicalProcess: [{
				id: String,
				name: String
			}]
		}
	}],
	externalCrossReferences: [externalCrossReferencesSchema],
	evidenceReferences: [evidenceReferencesSchema]
});

const productsSchema = new _mongoose2.default.Schema({
	regulatorId: String,
	name: String,
	molecularWeight: Number,
	isoelectricPoint: Number,
	cellularLocation: String,
	anticodon: String,
	note: String,
	type: String,
	sequence: String,
	synonyms: Array,
	motifs: [{
		leftEndPosition: Number,
		rightEndPosition: Number,
		sequence: String,
		description: String,
		type: String,
		note: String
	}],
	externalCrossReferences: [externalCrossReferencesSchema],
	evidenceReferences: [evidenceReferencesSchema]
});

const geneSchema = new _mongoose2.default.Schema({
	geneInfo: geneInfoSchema,
	products: [productsSchema]
});

const Gene = _mongoose2.default.model('genedatamarts', geneSchema);

exports.Gene = Gene;