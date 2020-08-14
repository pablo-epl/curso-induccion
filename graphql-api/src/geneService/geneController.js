/**
# name: geneController.js version: 1.0

## synopsis

```javascript
geneController.getAllGenes(limit, page)
geneController.getGenesBy(id, name);

```

## description
Aquí residen las funciones que conectan a la BD de datos y responden a los 
resolucionadores con los resultados obtenidos de la consulta

## arguments

* limit
establece el número máximo de documentos a devolver
* page
Establece la página actual en la que se encuentra la consulta
* id
Define el Identificador de geneInfo a buscar por el servidor
* name
Define el nombre de geneInfo a buscar por el servidor

* __Return:__
Object - __ Genes
Devuelve un objeto que contiene todos los documentos a mostrar en el servidor

## code

**/

// importa el modelo definido para la colección Gene
import { Gene } from './geneModel';

class geneController {
	// Responde a la consulta getAll de Gene
	static async getAllGenes(limit = 10, page) {
		return Gene.find({}).limit(limit).skip(page * limit);
	}

	// Responde a la consulta getBy de Gene
	static async getGenesBy(id, name) {
		let filter = {};
		filter = { 'geneInfo.name': name };
		if (id !== undefined) filter = { 'geneInfo.id': id };
		return Gene.find(filter);
	}
}

export { geneController };
