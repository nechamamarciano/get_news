// rabbitmq.test.js

const amqp = require('amqplib');

const queueName = 'get_news_queue';
const connectionString = 'amqp://guest:guest@localhost:5672/'


describe('Sending Message to RabbitMQ', () => {
  let connection;
  let channel;

  beforeAll(async () => {
    // Connect to RabbitMQ server
    connection = await amqp.connect(connectionString); 
    channel = await connection.createChannel();
  });

  afterAll(async () => {
    // Close connection after tests
    await channel.close();
    await connection.close();
  });

  it('should send a message with preferences to RabbitMQ', async () => {
    const queue = queueName; 

    // Ensure queue exists (create if not exists)
    await channel.assertQueue(queue, { durable: true });

    // Message content (e.g., preferences as a string)
    const preferences = JSON.stringify({ type: 'preferences', data: 'some data' });

    // Send message to queue
    await channel.sendToQueue(queue, Buffer.from(preferences), { persistent: true });

    console.log(`Sent message to queue ${queue}: ${preferences}`);

    // Assertions
    expect(true).toBe(true); // Placeholder assertion
  });
});
