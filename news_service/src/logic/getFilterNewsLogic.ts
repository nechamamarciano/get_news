import { GoogleGenerativeAI } from "@google/generative-ai";
import * as Buffer from 'buffer'

const API_KEY= "AIzaSyBi2HjNxUEqVJOjOKPfNUgKf0iIEPQBCyk";
const genAI = new GoogleGenerativeAI(API_KEY);

async function getFilteredNewsLogic(preferences:string, news:string[]): Promise<string> {
  try {
    console.log("filtering the news");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    
    const parsedPreferences = JSON.parse(preferences)
    const contentData = parsedPreferences.content.data;
    const userPreferences: string = Buffer.Buffer.from(contentData).toString('utf8');

    const request = `I have a list of news :${JSON.stringify(news)}. I got preferences from a user :${userPreferences}. 
    Please write a message to the user giving him only the news that go according to his preferences.
    Please note that your response will go directly to the user so please write it accordingly giving also the links to the news(without {}...).} 
    `;
    const result = await model.generateContent(request);
    const response = result.response;
    const text = response.text();
    console.log(text)
    return text;

  } catch (error) {
    console.error('Error filtering news:', error);
    throw error; 
  }
}

export default getFilteredNewsLogic;