import * as amqp from 'amqplib';

async function sendRequestToRabbitMQ(preferences: string): Promise<void> {

    const queueName = 'get_news_queue';
    const connectionString = 'amqp://guest:guest@localhost:5672/'

    try {
        // Connect to RabbitMQ server
        const connection = await amqp.connect(connectionString);
        const channel = await connection.createChannel();
        
        // Assert the queue
        await channel.assertQueue(queueName, { durable: true });

        channel.sendToQueue(queueName, Buffer.from(preferences));

        // Close the connection and channel
        await channel.close();
        await connection.close();
        console.log("the preferences have been sent to rabbitMQ", preferences)
    } catch (error) {
        console.error('Error sending preferences to RabbitMQ:', error);
        throw error;
    }
}

export default sendRequestToRabbitMQ;
