import { closeDatabase, connectToDatabase, getDatabase } from '../01-utils/db';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../02-models/user_model';


export const insertUserInDatabase = async (user:User) => {
    await connectToDatabase();

    const id = uuidv4();
    const userWithId = { ...user, id };
    const db = getDatabase();
    await db.collection('users').insertOne(userWithId);

    console.log('Inserted new user in database with ID:', id);
    closeDatabase();
    return user;
}