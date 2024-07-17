# get_news

## Project Overview

The **get_news** project is a microservice-based application that aggregates news and technology updates based on user preferences. The system fetchs the latest news, picks up the most interesting news using AI based on user preferences and sends this information to users via email.

## System Architecture

- **User Service**: Manages user registration, preferences, and communicates with MongoDB, RabbitMQ and other services.
- **News Service**: Fetches and filters news based on user preferences, communicates with RabbitMQ.
- **Email Service**: Sends personalized news updates to users via email.

## System Flow   

**User Service**: This our central service. It communicates with the other services in order to process the request.    
It first gets information from the user through an http request and saves it in the users database (in mongoDB).   
It then sends the request into a queue for it to be processed by the news service.   
When it gets back the filtered news, it sends it to the email service.   

**News Service**: This service communicates with RabbitMQ. As soon as it gets preferences from the user service, it fetches the latest news using an api.   
It then filters the news based on user preferences.   
Finally, it sends the filtered news to the user service.    

**Email Service**: This service gets through http, the news from the user service.   
It then sends the news to the user via email.

## System Diagram

The diagram illustrates the interactions between microservices and external components:
![image](https://github.com/user-attachments/assets/9547aa65-8377-44d2-ba94-bd5340ff04a9)

## Running the Application Locally

### Step-by-Step Instructions:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nechamamarciano/get_news.git
   cd get_news
   ```

2. **Start the application with Docker Compose:**

Please note: This feature is still not 100% functional: it runs all microservices but doesn't connect to rabbitMQ for some reason. It will hopefully be 100% in the near futur!

   ```bash
   docker-compose up --build
   ```

   - This command starts MongoDB, and all microservices.

3. **Start the application with npm start:**

The 3 services may be started with "npm start". That will also start mongoDB and rabbitMQ.   
In order to access the database in mongoDB, this is the public api key: "ctarwurw".

## Testing the Application:

### Postman:
https://grey-trinity-233802.postman.co/workspace/Team-Workspace~3df2ede5-431d-42d4-8fa8-13df03328b66/collection/27455246-7318aade-3dad-4f3d-a288-35dedeb6d4aa?action=share&creator=27455246
- Click on this link and navigate to the get_news collection to test API endpoints.
- You may test the first post request which is posting a user. That will run the whole application.

### Integration tests:
To run integration tests, you can write in the terminal: "npm test"

## To Do:

- Email functionality is currently not operational. Must add a verified mailing account to send emails from in order to activate it.
- Get the docker-compose to be functional also for the connection to rabbitMQ.
- Daperize the app: Dapr has already been downloaded and installed. Now, I have to continue adding dapr code in the controllers.  
- Add an extra service : summary_service. This service should receive filtered news from the news service (through rabbitMQ) and summarize it. It should then send the summarized news to the user service
- Add authentification: in the user service, create a new controller for the user login. The user's request should be approved only if he is logged in. This should be checked with the token.
