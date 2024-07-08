import express, { Request, Response } from 'express';
import getLatestNews from './getLatestNews';
import createSummary from './createSummary';


const app = express();
const PORT = 4000;

// Middleware to parse JSON request body
app.use(express.json());

app.get('/api/news/:id', async (req: Request, res: Response) => {

    // const userId = +req.params.id;

    try {
        const news = await getLatestNews();
        try {
            const summaries = await createSummary(news);
            res.json(summaries);
          } 
          catch (error) {
            console.error('Error creating summaries:', error);
            // Handle error appropriately
          }
      } 
      catch (error) {
        console.error('Error fetching news:', error);
      }

    });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
    