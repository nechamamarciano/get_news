import express, { NextFunction, Request, Response } from 'express';
import { processFilteredNews } from '../04-logic/processLogic';
// import DaprClient from 'dapr-client';

const server = express.Router();
// const daprPort = 3500;

// POST http://localhost:3000/api/news
server.post('/news', async (req: Request, res: Response, nextFunc: NextFunction) => {
    try{
        const filteredNews = req.body;
        console.log("we got back the filtered news")


//TO DO: daperize

        // // Initialize Dapr client
        // const daprClient = new DaprClient(`http://localhost:${daprPort}`);

        // // Invoke other services using Dapr's HTTP invocation
        // await daprClient.invokeService('serviceapp', 'method', {
        //     method: 'POST',
        //     body: filteredNews,
        //     headers: { 'Content-Type': 'application/json' }
        // });

        res.json(filteredNews)
        processFilteredNews(filteredNews)
    } catch (error:any){
        nextFunc(error);
    }
});

export default server;