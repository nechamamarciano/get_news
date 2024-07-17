import axios from "axios";
import sendRequestToRabbitMQ from "../01-utils/messageQueueHandler";

let userEmail:string;
let userPreferences:string;

export function sendRequestForFilteredNews(email: string, preferences: string) : void {
    userEmail = email;
    userPreferences= preferences;

    sendRequestToRabbitMQ(userPreferences);
}


const EMAIL_SERVICE_URL = 'http://localhost:4000/api/email';

export async function processFilteredNews(filteredNews:string){
    try {
        const requestData = {
            filteredNews: filteredNews,
            userEmail: userEmail
        };
        const response = await axios.post(EMAIL_SERVICE_URL, requestData);
        console.log("the news have been sent to the email_service")
        return response.data;
    } catch (error) {
        console.error('Error sending the news to email service:', error);
        throw error;
    }
}