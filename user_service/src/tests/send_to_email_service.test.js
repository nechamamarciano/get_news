const axios = require('axios');

describe('Sending News and Email to Another Service', () => {
  const emailServiceUrl = 'http://localhost:4000/api/email'; // Replace with the URL of the service endpoint

  it('should send news and email to another service through HTTP', async () => {
    const requestData = {
      news: 'Breaking news: important update!',
      email: 'recipient@example.com'
    };

    try {
      const response = await axios.post(emailServiceUrl, requestData);

      // Assertions
      expect(response.status).toBe(200); // Example: Check if request was successful
      expect(response.data).toHaveProperty('message'); // Example: Check for expected response structure
    } catch (error) {
      // Handle errors
      console.error('Error sending data:', error.message);
      throw error;
    }
  });
});
