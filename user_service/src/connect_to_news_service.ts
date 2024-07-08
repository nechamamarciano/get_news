import express, { Request, Response } from 'express';
import axios from 'axios';

const NEWS_SERVICE_URL = 'http://localhost:4000/api/news';

async function connect_to_news_service(userId:string) {

 async (req: Request, res: Response) => {
    
    try {
        await axios.get(`${NEWS_SERVICE_URL}/${userId}`);
        res.json("We got your request. In a few moments, you will receive the latest news in your email.")
      } 
      catch (error) {
        console.error('Error fetching news from news service:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}
}

export default connect_to_news_service;