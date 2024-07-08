// server.ts
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from 'uuid';
import db from './db';
import User from './models/user_model';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// API endpoint to receive user data and store in MongoDB
app.post('/api/user', async (req: Request, res: Response) => {
  const { preferences, email } = req.body;

  try {
    // Generate a userID (you can use UUID or any other method)
    const userID = generateUserID(); // Implement this function

    // Create new user instance
    const newUser = new User({
      userID,
      preferences,
      email,
    });

    // Save user to MongoDB
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', userID });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Failed to create user' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



function generateUserID(): string {
  return uuidv4();
}
