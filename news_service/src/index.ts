import express, { Request, Response } from 'express';
import getLatestNews from './getLatestNews';

const app = express();
const PORT = 4000;

// Middleware to parse JSON request body
app.use(express.json());

app.get('/api/news/:id', async (req: Request, res: Response) => {

    // const userId = +req.params.id;

    try {
        const news = await getLatestNews();
        try {
          // const response = async getNewsPref(news, userId)
          //   res.json(response)
          } 
          catch (error) {
            console.error("Error getting news according to user's preferences:", error);
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
    