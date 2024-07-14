import { MongoClient, Db } from 'mongodb';

const uri = 'mongodb+srv://nechama:DOB140600@atlascluster.cb49zox.mongodb.net/';

let client: MongoClient;
let db: Db;

export const connectToDatabase = async () => {
    try {
        client = await MongoClient.connect(uri);
        db = client.db();
        console.log('Connected to MongoDB');
    } catch (error:any) {
        console.log('Error connecting to MongoDB:', error);
        throw error;
    }
};

export const getDatabase = () => {
    if (!db) {
        throw new Error('Database not connected');
    }
    return db;
};

export const closeDatabase = () => {
    if (client) {
        client.close();
        console.log('Disconnected from MongoDB');
    }
};
