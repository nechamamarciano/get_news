import express, { Request, Response } from 'express';
import { sendNewsToUsersEmail } from '../logic/sendNewsToUsersEmailLogic';

const server = express.Router();

// POST http://localhost:4000/api/email
server.post('/email', async (req: Request, res: Response) => {
    try{
        const requestData = req.body;
        const filteredNews = requestData.filteredNews;
        const userEmail = requestData.userEmail;

        sendNewsToUsersEmail(filteredNews, userEmail);
        return filteredNews;
    } catch(error:any){
        console.log("error sending the filtered news", error)
    } 
});

export default server;