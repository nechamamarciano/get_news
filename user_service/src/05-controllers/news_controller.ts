import express, { NextFunction, Request, Response } from 'express';
import { processFilteredNews } from '../04-logic/processLogic';


const server = express.Router();

// POST http://localhost:3000/api/news
server.post('/news', async (req: Request, res: Response, nextFunc: NextFunction) => {
    try{
        const filteredNews = req.body;
        console.log("we got back the filtered news")
        res.json(filteredNews)
        processFilteredNews(filteredNews)
    } catch (error:any){
        nextFunc(error);
    }
});

export default server;