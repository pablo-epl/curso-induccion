/**
# name: geneModel.js version: 1.0

## synopsis

```javascript

import {Gene} from './geneModel'

```

## description
Objeto modelo para acceder a la base de datos de RegulonDB a traves de mongoose

## arguments
No aplica

* __Return:__
No aplica


## code

**/

import mongoose from 'mongoose';

const evidenceReferencesSchema = new mongoose.Schema({
	evidenceName: String,
	evidenceCode: String,
	evidenceType: String,
	referenceID: String,
	referenceURL: String,
	referenceCitation: String
});

const externalCrossReferencesSchema = new mongoose.Schema({
	id: String,
	name: String,
	url: String
});

const geneInfoSchema = new mongoose.Schema({
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
	synonyms: [ String ],
	terms: [
		{
			multifun: [ [ String ] ],
			geneOntology: {
				cellularComponent: [
					{
						id: String,
						name: String
					}
				],
				molecularFunction: [
					{
						id: String,
						name: String
					}
				],
				biologicalProcess: [
					{
						id: String,
						name: String
					}
				]
			}
		}
	],
	externalCrossReferences: [ externalCrossReferencesSchema ],
	evidenceReferences: [ evidenceReferencesSchema ]
});

const productsSchema = new mongoose.Schema({
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
	motifs: [
		{
			leftEndPosition: Number,
			rightEndPosition: Number,
			sequence: String,
			description: String,
			type: String,
			note: String
		}
	],
	externalCrossReferences: [ externalCrossReferencesSchema ],
	evidenceReferences: [ evidenceReferencesSchema ]
});

const geneSchema = new mongoose.Schema({
	geneInfo: geneInfoSchema,
	products: [ productsSchema ]
});

const Gene = mongoose.model('genedatamarts', geneSchema);

export { Gene };
