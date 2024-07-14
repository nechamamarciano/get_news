const axios = require('axios');


const myApi_key = 'pub_4796040b9f3381d455ff482990e0f3186c307'

describe('Fetching News from API', () => {
  it('should fetch news from the API', async () => {
    const apiKey = myApi_key;
    const apiUrl = `https://newsdata.io/api/1/latest?apikey=${apiKey}&q=cryptocurrency`

    try {
      // Make HTTP GET request to fetch news
      const response = await axios.get(apiUrl);

      // Check if request was successful (status code 200)
      expect(response.status).toBe(200);

    } catch (error) {
      // Handle errors
      console.error('Error fetching news:', error.message);
      throw error;
    }
  });
});
