import axios from 'axios';

const api_key = 'pub_4796040b9f3381d455ff482990e0f3186c307'


async function getLatestNewsLogic(): Promise<string[]> {
  try {
    console.log("getting latest news")
    const apiUrl = `https://newsdata.io/api/1/latest?apikey=${api_key}&q=cryptocurrency`;
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error; 
  }
}

export default getLatestNewsLogic;