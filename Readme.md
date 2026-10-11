# Posts API

A simple REST API built with Node.js and Express.js to perform CRUD (Create, Read, Update, Delete) operations on posts. Posts are stored in an in-memory array.

## Features

- Get all posts
- Get a post by ID
- Create a new post
- Update an existing post
- Delete a post
- Validate post text


## Tech Stack

- Node.js
- Express.js
- Postman for testing

## Project Structure

```text
posts-api/
├── src/
│   ├── controllers.js
│   └── routes.js
├── app.js
├── server.js
├── package.json
└── README.md
```

## Installation

### 1. Install Node.js

Make sure Node.js and npm are installed.

Check their versions:

```bash
node -v
npm -v
```

### 2. Clone the repository

```bash
git clone https://github.com/harshrajput-0/rest-api-with-express.git
cd rest-api-with-express
```

### 3. Install dependencies

```bash
npm install
```

## Run the Server

Start the server:

```bash
npm start
```

For development with automatic restarts:

```bash
npm run dev
```

The server should be available at:

```text
http://localhost:3000
```

The API base URL is:

```text
http://localhost:3000/api/posts
```


## API Routes

| Method | Endpoint | Description | Success Status |
|---|---|---|---|
| GET | `/api/posts` | Get all posts | 200 |
| GET | `/api/posts/:id` | Get a post by ID | 200 |
| POST | `/api/posts` | Create a post | 201 |
| PUT | `/api/posts/:id` | Update a post | 200 |
| DELETE | `/api/posts/:id` | Delete a post | 200 |

## Testing with Postman

Open Postman and create requests using the URLs and request bodies below.

### 1. Get All Posts

**Method:** `GET`

```text
http://localhost:3000/api/posts
```

Expected status: `200 OK`

Example response:

```json
[
  {
    "id": 1,
    "text": "Hello world!"
  }
]
```

### 2. Get a Single Post

**Method:** `GET`

```text
http://localhost:3000/api/posts/1
```

Expected status: `200 OK`

Example response:

```json
{
  "id": 1,
  "text": "Hello world!"
}
```

To test a nonexistent post, use `/api/posts/999`. Expected status: `No post found`.

### 3. Create a Post

**Method:** `POST`

```text
http://localhost:3000/api/posts
```

In Postman, select **Body → raw → JSON**.

Request body:

```json
{
  "text": "My first post"
}
```

Expected status: `201 Created`

Example response:

```json
{
  "message": "Post created successfully"
}
```

### 4. Update a Post

**Method:** `PUT`

```text
http://localhost:3000/api/posts/1
```

Select **Body → raw → JSON**.

Request body:

```json
{
  "text": "Updated post text"
}
```

Expected status: `200 OK`

Example response:

```json
{
  "id": 1,
  "text": "Updated post text"
}
```

### 5. Delete a Post

**Method:** `DELETE`

```text
http://localhost:3000/api/posts/1
```

Expected status: `200 OK`

Example response:

```json
{
  "message": "Post deleted successfully"
}
```

## Important Notes

- Posts are stored in an in-memory JavaScript array, not a database.
- All posts are reset when the server restarts.
- The ID counter starts at `2` and increments when posts are created.
