import express from 'express';
import mongoose from 'mongoose'
import {error, success} from 'consola';
import {PORT, IN_PROD, DB} from './config';
import {gql, ApolloServer} from 'apollo-server-express';
import {typeDefs, resolvers} from './graphql/';
import * as AppModels from './models'

async function startApp() {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        success({
            badge: true,
            message: "Successfully connected with the database.",
            //message: `Server started at http://localhost:${PORT}${server.graphqlPath}`
        })

        const server = new ApolloServer({
            typeDefs,
            resolvers,
            playground: IN_PROD,
            context: {
                ...AppModels
            }
        });
        await server.start();

        const app = express();
        server.applyMiddleware({app});

        await new Promise(resolve => app.listen({port: PORT}, resolve));

        return {server, app};
    } catch (err) {
        error({
            message: err.message, badge: true
        })
    }
}

startApp();