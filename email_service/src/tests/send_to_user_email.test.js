const axios = require('axios');

describe('Sending Data to User Email using MailerSend API', () => {
  const mailerSendApiKey = "mlsn.ffdb93adb44510946ffff3d8db4b1a9c8f6bc12d4d02bbab0e77f53c80242481";
  const userEmailAddress = 'nehamabenaim@example.com';

  it('should send data to user email using MailerSend API', async () => {
    const requestData = {
      userEmail: userEmailAddress,
      news: 'Breaking news: important update!',
    };

    try {
      // Make API request to MailerSend to send email
      const response = await axios.post('https://api.mailersend.com/v1/email', {
        from: {
          email: 'nehamabenaim@example.com',
          name: 'news',
        },
        to: [
          {
            email: requestData.userEmail,
            name: 'Recipient',
          },
        ],
        subject: 'Test Email',
        html: `<p>${requestData.news}</p>`,
        text: requestData.news,
      }, {
        headers: {
          'Authorization': `Bearer ${mailerSendApiKey}`,
          'Content-Type': 'application/json',
        },
      });

      // Assertions
      expect(response.status).toBe(200); // Check if request was successful
      expect(response.data).toHaveProperty('messageId'); // Example: Check for expected response structure
    } catch (error) {
      // Handle errors
      console.error('Error sending email:', error.message);
      throw error;
    }
  });
});
