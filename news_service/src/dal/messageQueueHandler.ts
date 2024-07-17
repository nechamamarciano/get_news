import * as amqp from 'amqplib';
import { processRequest } from '../logic/processRequestLogic';

// const RABBITMQ_URL = 'amqp://guest:guest@localhost:5672/';
const RABBITMQ_URL ='amqp://guest:guest@localhost:5672/'
const QUEUE = 'get_news_queue';

export async function messageQueueHandler(): Promise<any> {
    let connection: amqp.Connection;
    let channel: amqp.Channel;

    try {
        // Connect to RabbitMQ server
        connection = await amqp.connect(RABBITMQ_URL);
        console.log('Connected to RabbitMQ');

        // Create a channel
        channel = await connection.createChannel();

        // Assert the queue to ensure it exists
        await channel.assertQueue(QUEUE, { durable: true });

        console.log(`Waiting for preferences in ${QUEUE}...`);

        await channel.consume(QUEUE, async(message) => {
            if (message !== null) {
                const preferences = JSON.stringify(message);
                processRequest(preferences)
                channel.ack(message);
            }
        });
        await new Promise(resolve => setTimeout(resolve, 8000));
    } catch (error) {
        console.error('Error:', error);
        throw error;
    } 
}

export default messageQueueHandler;