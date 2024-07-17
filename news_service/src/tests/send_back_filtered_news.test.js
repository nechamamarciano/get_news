const axios = require('axios');

const USER_SERVICE_URL = 'http://localhost:3000/api/news';

describe('Sending News to Another HTTP Service', () => {
  it('should send news to the HTTP service', async () => {
    
    try {
      const newsData = JSON.stringify({ title: 'Breaking News', content: 'Lorem ipsum dolor sit amet.' });

      // Make HTTP POST request to send news data
      const response = await axios.post(USER_SERVICE_URL, newsData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Check if request was successful (status code 200)
      expect(response.status).toBe(200);

      // log the response data
      console.log('Response:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error sending news:', error.message);
      throw error;
    }
  });
});
