This project is a simple CRUD API for users. CRUD means Create, Read, Update, and Delete.
The API uses Node.js, Express, MongoDB, and Mongoose.
FEATURES
Create a new user
Get all users
Update a user
Delete a user
Prevent duplicate email addresses
Show useful error messages
PROJECT FOLDERS
src/config/db.js connects the project to MongoDB.
src/models/user.js contains the user schema.
src/controllers/userController.js contains the API logic.
src/routes/userRoutes.js contains the user routes.
src/middlewares/errorHandler.js handles errors.
src/index.js starts the server.
REQUIREMENTS
Install Node.js.
Install MongoDB or create a MongoDB Atlas database.
Install Postman if you want to test the API.
HOW TO RUN THE PROJECT
Open the project folder in the terminal.
Run this command:
npm install
Create a file named .env in the project folder.
Add this information inside the .env file:
PORT=5002
MONGO_URI=mongodb://localhost:27017/digital_notebook
Start MongoDB.
Start the project with this command:
npm run dev
The API runs at:
http://localhost:5002
API ROUTES
Get all users
GET http://localhost:5002/api/users
Create a user
POST http://localhost:5002/api/users
In Postman, select Body, raw, and JSON.
Send this data:
{
  "name": "John",
  "email": "john@example.com"
}
Update a user
PUT http://localhost:5002/api/users/USER_ID
Send the user ID in place of USER_ID.
Example update data:
{
  "name": "John Doe"
}
Delete a user
DELETE http://localhost:5002/api/users/USER_ID
COMMON ERRORS
Error 400 means name or email is missing. Send the request body as JSON.
Error 404 means the route or user ID was not found.
Error 409 means the email already exists. Use a different email address.
Error 500 usually means MongoDB is not running or the MongoDB connection URL is incorrect.
MONGODB COMPASS
Connect MongoDB Compass using:
mongodb://localhost:27017
Open the digital_notebook database.
Open the users collection.
Click Documents to view all saved users.
DOCKER
Build the Docker image:
docker build -t crud-api-project .
Run the Docker container:
docker run --rm -p 5002:5002 -e MONGO_URI=mongodb://host.docker.internal:27017/digital_notebook crud-api-project
The API will then run at:
http://localhost:5002
