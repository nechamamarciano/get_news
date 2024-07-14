import getFilteredNewsLogic from "./getFilterNewsLogic";
import getLatestNewsLogic from "./getLatestNewsLogic";
import {sendFilteredNews } from "./sendFilteredNews";


export async function processRequest(preferences:string): Promise<any> {
    console.log('Processing news filtered fetch:');

    const news = await getLatestNewsLogic(); 
    const filteredNews = await getFilteredNewsLogic(preferences, news);
    console.log("finished processing the news")
    sendFilteredNews(filteredNews);
}