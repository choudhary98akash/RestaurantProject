const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

// POST route to handle OTP request
app.post('/sendOtp', async (req, res) => {
  try {
    const { email } = req.body;
    const response = await axios.post('https://script.google.com/macros/s/AKfycbzcngcID_Vz2sdD_1eAEJ-ONE3rF7YZ_DUqnziAeOhOi8r-T_IxzIUBxTAfWo7Jt9mo/exec', {
      email: email
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error calling Google Apps Script:', error.message);
    res.status(500).json({ error: 'Failed to call Google Apps Script' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
