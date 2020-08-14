/**
# name: index.js version: 1.0

## synopsis

```shell
    npm start 
```

## description
Define y configura el servidor de GraphQL para levantar el servicio

## arguments
No aplica

* __Return:__
No aplica

## code

**/

// importando las bibliotecas necesarias
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema';
import { resolvers } from './geneService/geneResolver';
import mongoose from 'mongoose';

// Conectando a la base de datos
const uri = 'mongodb+srv://(usuario):(password)@(URL))/(collection)';
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

// Definir el servidor de GraphQL
const server = new ApolloServer({
	playground: true,
	typeDefs,
	resolvers
});
const app = express();
server.applyMiddleware({ app });

// Levantando el servidor
const servExpress = app.listen(4000, () =>
	console.log(`El servidor está disponible en http://localhost:${servExpress.address().port}${server.graphqlPath}`)
);
