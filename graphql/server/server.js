import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import bodyParser from 'body-parser';
import axios from 'axios';

async function ser() {
    const app = express();

    const server = new ApolloServer({
        typeDefs: `
        type User{
            name:String
            id:ID
            email:String
        },
            type Todo {
                id: ID!
                title: String!
                completed: Boolean
                user:User
            }
            type Query { 
                getTodos: [Todo]
                getUsers:[User]
                getUser(id:ID!):User
            }
        `,
        resolvers: {
            Todo:{
                user: async (todo) => (await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.id}`)).data 

            },  
            Query: {
                getTodos:async () => (await axios.get("https://jsonplaceholder.typicode.com/todos")).data,
                getUsers:async() => (await axios.get("https://jsonplaceholder.typicode.com/users")).data,
                getUser:async(parent,{id}) => (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data
            }
        }
    });

    app.use(bodyParser.json());
    app.use(cors());

    await server.start();

    app.use('/graphql', expressMiddleware(server));

    app.listen(1000, () => console.log('Server started on http://localhost:1000/graphql'));
}

ser();
