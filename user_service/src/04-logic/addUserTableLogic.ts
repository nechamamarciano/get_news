import { Db, Collection } from 'mongodb';
import { connectToDatabase, getDatabase } from '../01-utils/db';


async function addUserTableLogic() {
    console.log("hii im here!")
    await connectToDatabase();
    const db = await getDatabase();
   
    // Define the schema for the user table
    const userSchema = {
        id: { type: 'string' },
        email: { type: 'string' },
        preferences: { type: 'string' }
    };

    try {
        // Create the userTable collection (if it does not exist)
        const collection: Collection = await db.createCollection('users_table', {
            validator: {
                $jsonSchema: {
                    bsonType: 'object',
                    properties: userSchema
                }
            }
        });

        console.log('users collection created successfully');
    } catch (err:any) {
        console.error('Error creating users collection:', err.message);
    }
}

export default addUserTableLogic;
