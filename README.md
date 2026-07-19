# CRUD API Project

A simple REST API for managing users. Built with Node.js, Express, MongoDB, and Mongoose.

## Features

- Create a user
- Get all users
- Update a user
- Delete a user
- Prevent duplicate email addresses
- Return clear API error responses

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Docker
- Nodemon

## Project Structure

```text
src/
  config/
    db.js
  controllers/
    userController.js
  middlewares/
    errorHandler.js
  models/
    user.js
  routes/
    userRoutes.js
  index.js
```

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB running locally
- Postman for API testing

### Installation

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
PORT=5002
MONGO_URI=mongodb://localhost:27017/digital_notebook
```

Start the development server:

```bash
npm run dev
```

The API runs at:

```text
http://localhost:5002
```

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/users` | Get all users |
| POST | `/api/users` | Create a user |
| PUT | `/api/users/:id` | Update a user |
| DELETE | `/api/users/:id` | Delete a user |

## Create User

**POST** `http://localhost:5002/api/users`

In Postman, select **Body > raw > JSON**.

```json
{
  "name": "John",
  "email": "john@example.com"
}
```

## Update User

**PUT** `http://localhost:5002/api/users/USER_ID`

```json
{
  "name": "John Doe"
}
```

## Delete User

**DELETE** `http://localhost:5002/api/users/USER_ID`

## Common Errors

| Status Code | Meaning |
| --- | --- |
| 400 | Name or email is missing |
| 404 | Route or user was not found |
| 409 | Email already exists |
| 500 | Server or MongoDB connection error |

## MongoDB Compass

Connect using:

```text
mongodb://localhost:27017
```

Open the `digital_notebook` database, then open the `users` collection.

## Docker

Build the Docker image:

```bash
docker build -t crud-api-project .
```

Run the container:

```bash
docker run --rm -p 5002:5002 -e MONGO_URI=mongodb://host.docker.internal:27017/digital_notebook crud-api-project
```
