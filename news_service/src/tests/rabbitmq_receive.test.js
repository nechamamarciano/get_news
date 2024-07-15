const amqp = require('amqplib');


const RABBITMQ_URL = 'amqp://guest:guest@localhost:5672/';
const QUEUE = 'get_news_queue';

describe('Receiving Preferences from RabbitMQ', () => {
  let connection;
  let channel;

  beforeAll(async () => {
    // Connect to RabbitMQ server
    connection = await amqp.connect(RABBITMQ_URL); // Replace with your RabbitMQ server URL
    channel = await connection.createChannel();
  });

  afterAll(async () => {
    // Close connection after tests
    await channel.close();
    await connection.close();
  });

  it('should receive preferences from RabbitMQ', async () => {
    const queue = QUEUE;

    // Ensure queue exists (create if not exists)
    await channel.assertQueue(queue, { durable: true });

    // Receive message from queue
    const message = await new Promise((resolve) => {
      channel.consume(queue, (msg) => {
        resolve(msg);
      }, { noAck: true });
    });

    if (message !== null) {
      const receivedPreferences = message.content.toString();
      console.log(`Received message from queue ${queue}: ${receivedPreferences}`);

    expect(receivedPreferences).toBeTruthy();
    } else {
      throw new Error('No message received from queue');
    }
  });
});
