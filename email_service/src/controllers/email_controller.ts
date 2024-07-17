import express, { Request, Response } from 'express';
import { sendNewsToUsersEmail } from '../logic/sendNewsToUsersEmailLogic';

const server = express.Router();

// POST http://localhost:4000/api/email
server.post('/email', async (req: Request, res: Response) => {
    try{
        console.log("We got the news and userEmail from the user_service, we will process the request now")
        const requestData = req.body;
        const filteredNews = requestData.filteredNews;
        const userEmail = requestData.userEmail;

        sendNewsToUsersEmail(filteredNews, userEmail);
        res.json(`filtered news: ${filteredNews}`);
    } catch(error:any){
        console.log("error sending the filtered news", error)

    } 
});

export default server;