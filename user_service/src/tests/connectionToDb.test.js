const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://nechama:DOB140600@atlascluster.cb49zox.mongodb.net/';

// Function to connect to MongoDB
async function connectToDatabase() {
  const client = new MongoClient(uri);
  await client.connect();
  return client;
}

// Integration test for inserting a user into MongoDB
describe('Insert User into MongoDB', () => {
  let client;

  // Set up before running the tests
  beforeAll(async () => {
    client = await connectToDatabase();
  });

  // Clean up after running the tests
  afterAll(async () => {
    await client.close();
  });

  // Test case: Insert a user
  it('should insert a user into MongoDB', async () => {
    const database = client.db(); 
    const usersCollection = database.collection('users');

    // Create a sample user object
    const user = { preferences: 'sports, politics', email: 'john.doe@example.com' };

    // Insert the user into MongoDB
    const result = await usersCollection.insertOne(user);

    // Assertions
    expect(result.insertedCount).toBe(1); 
    expect(result.ops[0]).toMatchObject(user);
  });
});
