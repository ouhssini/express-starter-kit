# Express Starter Kit

This project is a starter kit for building RESTful APIs using Express.js and MongoDB. It provides a basic structure and setup to help you get started quickly with your API development.

## Purpose

The purpose of this project is to provide a simple and easy-to-use starter kit for building RESTful APIs with Express.js and MongoDB. It includes basic setup and configuration, as well as some example code to help you get started.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4 or higher)
- Docker (optional, for containerized development)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ouhssini/express-starter-kit.git
   cd express-starter-kit
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file based on the provided `.env.example` file:

   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your environment variables:

   ```env
   APP_ENV=development
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/test
   ```

5. Start the development server:

   ```bash
   npm start
   ```

### Using Docker

1. Build and start the Docker containers:

   ```bash
   docker-compose up --build
   ```

2. The application will be available at `http://localhost:3000`.

## API Endpoints

### Users

- **GET /users**: Get all users
- **POST /users**: Create a new user
- **GET /users/:id**: Get a user by ID
- **PUT /users/:id**: Update a user by ID
- **DELETE /users/:id**: Delete a user by ID

#### Example Requests and Responses

- **GET /users**

  Request:

  ```http
  GET /users HTTP/1.1
  Host: localhost:3000
  ```

  Response:

  ```json
  [
    {
      "_id": "60c72b2f9b1d8e1a4c8b4567",
      "name": "John Doe",
      "createdAt": "2021-06-14T12:34:56.789Z",
      "updatedAt": "2021-06-14T12:34:56.789Z"
    }
  ]
  ```

- **POST /users**

  Request:

  ```http
  POST /users HTTP/1.1
  Host: localhost:3000
  Content-Type: application/json

  {
    "name": "John Doe"
  }
  ```

  Response:

  ```json
  {
    "_id": "60c72b2f9b1d8e1a4c8b4567",
    "name": "John Doe",
    "createdAt": "2021-06-14T12:34:56.789Z",
    "updatedAt": "2021-06-14T12:34:56.789Z"
  }
  ```

- **GET /users/:id**

  Request:

  ```http
  GET /users/60c72b2f9b1d8e1a4c8b4567 HTTP/1.1
  Host: localhost:3000
  ```

  Response:

  ```json
  {
    "_id": "60c72b2f9b1d8e1a4c8b4567",
    "name": "John Doe",
    "createdAt": "2021-06-14T12:34:56.789Z",
    "updatedAt": "2021-06-14T12:34:56.789Z"
  }
  ```

- **PUT /users/:id**

  Request:

  ```http
  PUT /users/60c72b2f9b1d8e1a4c8b4567 HTTP/1.1
  Host: localhost:3000
  Content-Type: application/json

  {
    "name": "Jane Doe"
  }
  ```

  Response:

  ```json
  {
    "_id": "60c72b2f9b1d8e1a4c8b4567",
    "name": "Jane Doe",
    "createdAt": "2021-06-14T12:34:56.789Z",
    "updatedAt": "2021-06-14T12:34:56.789Z"
  }
  ```

- **DELETE /users/:id**

  Request:

  ```http
  DELETE /users/60c72b2f9b1d8e1a4c8b4567 HTTP/1.1
  Host: localhost:3000
  ```

  Response:

  ```json
  {
    "message": "User deleted successfully"
  }
  ```

## Environment Variables

The following environment variables are required in the `.env` file:

- `APP_ENV`: The application environment (e.g., `development`, `production`)
- `PORT`: The port number on which the server will run
- `MONGODB_URI`: The MongoDB connection URI

