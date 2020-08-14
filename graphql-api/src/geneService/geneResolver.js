/**
# name: geneResolver version: 1.0

## synopsis

```javascript

import {resolvers} from './resolvers'

```

## description
Este archivo es el resolucionador para los query definidos en el schema de GraphQL
y es utilizado en la definición del servidor de GraphQL para levantar la API

## arguments
No aplica

* __Return:__
Type JSON __ Gene


## code

**/

// importa la clase geneController para disponer de las funciones definidas en ella
import { geneController } from './geneController';

export const resolvers = {
	Query: {
		// responde a la consulta getAllGenes realizada por el servidor
		getAllGenes: (root, { limit, page }) => geneController.getAllGenes(limit, page),
		// responde a la consulta getGenesBy realizada por el servidor
		getGenesBy: (root, { id, name }) => geneController.getGenesBy(id, name)
	}
};
