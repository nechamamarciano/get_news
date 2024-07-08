// db.ts
import mongoose, { ConnectOptions } from 'mongoose';

const MONGO_URI = '668b8969d2a45f7f789fbde2'

const options: ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(MONGO_URI, options)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

const db = mongoose.connection;

export default db;
