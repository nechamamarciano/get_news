// Import required libraries
import axios from 'axios';

const geminiApiKey = 'AIzaSyBHyHqiGaliECS9ArfRxNi_7pUWoVVFkMw';

// Define function to create summaries
async function createSummary(data: any[]): Promise<string[]> {
  try {
    const apiUrl = 'https://api.gemini.com/v1/summarize';
    const response = await axios.post(apiUrl, {
      data,
    }, {
      headers: {
        'Authorization': `Bearer ${geminiApiKey}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data.summaries;
  } catch (error) {
    console.error('Error creating summaries:', error);
    throw error; // Optional: Propagate the error further
  }
}

export default createSummary;
