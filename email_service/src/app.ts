import express from 'express';
import bodyParser from 'body-parser';
import email_controller from './controllers/email_controller';

const server = express();
const port = 4000;

server.use(bodyParser.json());

server.use("/api", email_controller);

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
