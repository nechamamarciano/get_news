import express from 'express'
import user_controller from './05-controllers/user_controller'
import bodyParser from 'body-parser'
import news_controller from './05-controllers/news_controller';
import { catchAll } from './03-middleware.ts/catchAll';
import { RouteNotFoundError } from './02-models/error_model';
import addUserTableLogic from './04-logic/addUserTableLogic';


async function prepareDb() {
    try {
        await addUserTableLogic();
    } catch (err:any) {
        console.error('Failed to initialize userTable collection:', err.message);
    } 
}

prepareDb();
const port = 3000;
const server = express();
server.use(bodyParser.json());

server.use("/api", user_controller);
server.use("/api", news_controller);
server.use('/*', RouteNotFoundError)
server.use(catchAll);

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});