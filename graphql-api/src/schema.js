/**
# name: schema.js version: 1.0

## synopsis

```javascript

import {typeDefs} from './schema'

```

## description
Este archivo fusiona los archivos schema con extensión .graphql definidos y es 
utilizado en la definición del servidor de GraphQL para levantar la API

## arguments
No aplica

## code

**/

//importación de bibliotecas a usar
import { mergeTypes } from 'merge-graphql-schemas';
import { gql } from 'apollo-server-express';
import fs from 'fs';

//Leyendo el schema de GraphQL
const Gene = gql`${fs.readFileSync('./src/geneService/geneSchema.graphql').toString()}`;

//exportando el objeto que contiene los schemas fusionados
export const typeDefs = mergeTypes([ Gene ], { all: true });
