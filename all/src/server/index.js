const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const port = 8080;
const dotenv = require('dotenv');
dotenv.config();

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../', '../src/client/views/index.html'));
});

// POST endpoint to handle form submissions
app.post('/analyze', async (req, res) => {
  const { url } = req.body;

  const storiesUrl = 'https://api.aylien.com/api/v1/stories'; // Make sure this is the correct endpoint

  try {
    // Make the request to get stories
    const response = await axios.get(storiesUrl, {
      params: {
        url: url
      },
      headers: {
        'X-Application-Id': process.env.API_ID, // Your Aylien Application ID
        'X-Application-Key': process.env.API_KEY, // Your Aylien Application Key
        'Content-Type': 'application/json'
      }
    });

    // Process and summarize the response
    const stories = response.data.stories;
    const summary = stories.map(story => ({
      title: story.title,
      summary: story.summary
    }));

    res.json({ summary });
  } catch (error) {
    console.error('Error calling Aylien API:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to fetch data from Aylien API' });
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
