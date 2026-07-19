# CRUD API Project

A beginner-friendly REST API for creating, reading, updating, and deleting users. It uses Express, MongoDB, and Mongoose.

## What it does

- Creates users with a name and a unique email address.
- Lists all users.
- Updates a user by ID.
- Deletes a user by ID.
- Returns useful error responses for missing fields, duplicate emails, and unknown user IDs.

## Tech stack

- Node.js and Express
- MongoDB and Mongoose
- Nodemon for local development
- Docker for containerized runs

## Project structure

```text
src/
  config/db.js                 MongoDB connection
  controllers/userController.js API logic
  middlewares/errorHandler.js  Error responses
  models/user.js               User database schema
  routes/userRoutes.js         API routes
  index.js                     Application entry point
```

## Requirements

- Node.js 20 or newer
- MongoDB running locally, or a MongoDB Atlas connection string
- Postman (optional, for testing endpoints)

## Run locally

1. Install packages:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root:

   ```env
   PORT=5002
   MONGO_URI=mongodb://localhost:27017/digital_notebook
   ```

3. Start MongoDB.

4. Start the API:

   ```bash
   npm run dev
   ```

The API will run at `http://localhost:5002`.

## API endpoints

Base URL: `http://localhost:5002/api/users`

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `/api/users` | Get all users |
| `POST` | `/api/users` | Create a user |
| `PUT` | `/api/users/:id` | Update a user |
| `DELETE` | `/api/users/:id` | Delete a user |

### Create a user

In Postman select `POST`, use `http://localhost:5002/api/users`, then choose **Body -> raw -> JSON**. Do not choose `Text`.

```json
{
  "name": "John",
  "email": "john@example.com"
}
```

Successful response (`201 Created`):

```json
{
  "status": "created",
  "data": {
    "_id": "USER_ID",
    "name": "John",
    "email": "john@example.com"
  }
}
```

### Update a user

Use a user `_id` returned from the create or get-all request.

```text
PUT http://localhost:5002/api/users/USER_ID
```

```json
{
  "name": "John Doe"
}
```

### Delete a user

```text
DELETE http://localhost:5002/api/users/USER_ID
```

## Common errors

- `400`: Send a JSON body with both `name` and `email` when creating a user.
- `404`: Check that the URL is `/api/users` and that an ID exists for update/delete.
- `409`: That email is already used. Choose a different email address.
- `500`: Check that MongoDB is running and that `MONGO_URI` is correct.

## View users in MongoDB Compass

Connect Compass to:

```text
mongodb://localhost:27017
```

Then open `digital_notebook` -> `users` -> **Documents**. You can also run this in Compass's MONGOSH tab:

```javascript
use digital_notebook
db.users.find()
```

## Run with Docker

Build the image:

```bash
docker build -t crud-api-project .
```

On Windows or macOS, when MongoDB runs on your computer, start the API container with:

```bash
docker run --rm -p 5002:5002 -e MONGO_URI=mongodb://host.docker.internal:27017/digital_notebook crud-api-project
```

Then use the same API URL: `http://localhost:5002/api/users`.

`localhost` inside a Docker container means the container itself, not your computer. This is why the Docker command uses `host.docker.internal` for the MongoDB host.
