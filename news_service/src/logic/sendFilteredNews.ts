import axios from 'axios';


const USER_SERVICE_URL = 'http://localhost:3000/api/news';

export async function sendFilteredNews(news: string): Promise<string> {
    try {
        const requestData = {
            news: news
        };
        const response = await axios.post(USER_SERVICE_URL, requestData);
        return response.data;
    } catch (error) {
        console.error('Error sending the news to user service:', error);
        throw error;
    }
}