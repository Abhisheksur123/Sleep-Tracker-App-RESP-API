# Sleep Tracker API

## Overview

This project is a simple RESTful API built using Node.js and Express to allow a mobile app to store and retrieve user sleep data. 

## Features

- **Submit sleep data:** Allows users to submit their sleep duration along with a timestamp.
- **Retrieve sleep records:** Retrieves a list of all sleep records for a given user, sorted by date.
- **Delete sleep record:** Deletes a specific sleep record by its ID.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Setup

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd sleep-tracker-api


**Install dependencies**
npm install

**Start the server:**
npm start
The server will start on port 3000 by default.


API Endpoints
POST /sleep
Description: Submit sleep data.
Request Body:
**code**

{
  "userId": "user1",
  "hours": 8,
  "timestamp": "2024-05-18T08:00:00Z"
}

Response Body:
Response:

**code**
{
  "id": "unique-record-id",
  "userId": "user1",
  "hours": 8,
  "timestamp": "2024-05-18T08:00:00Z"
}
GET /sleep
Example Request:
 code
curl -X POST http://localhost:3000/sleep -H "Content-Type: application/json" -d '{
  "userId": "user1",
  "hours": 8,
  "timestamp": "2024-05-18T08:00:00Z"
}'
GET /sleep/:userId
Description: Retrieve all sleep records for a user.
Response:

code
[
  {
    "id": "unique-record-id",
    "userId": "user1",
    "hours": 8,
    "timestamp": "2024-05-18T08:00:00Z"
  }
]
Example Request:
code
curl http://localhost:3000/sleep/user1
DELETE /sleep/:recordId
Description: Delete a specific sleep record by its ID.
Response:
Status: 204 No Content

Example Request:

code
curl -X DELETE http://localhost:3000/sleep/unique-record-id
Running Tests
Install development dependencies:

code
npm install --save-dev mocha chai supertest
Run the tests:

code
npm test


code structure 
sleep-tracker-api/
├── app.js              # Main application file
├── package.json        # Project metadata and dependencies
├── package-lock.json   # Locked versions of dependencies
├── README.md           # Documentation
└── test/
    └── test.js         # Test cases



Dependencies
express: Web framework for Node.js
body-parser: Middleware to parse incoming request bodies
uuid: Library to generate unique IDs
mocha: Testing framework
chai: Assertion library for testing
supertest: Library for testing HTTP endpoints


**Running the Application**
npm start

Contributing
If you wish to contribute to this project, please fork the repository and submit a pull request.

License
This project is licensed under the MIT License.

### Instructions for Use

1. **Setup and Installation:**
   - Follow the steps under "Setup" to clone the repository, install dependencies, and start the server.
   - Ensure Node.js and npm are installed on your machine.

2. **Testing:**
   - Use the provided commands to run tests and verify the functionality of the API endpoints.
   - Tests cover all basic CRUD operations and error scenarios.

3. **API Usage:**
   - Follow the "API Endpoints" section to understand how to interact with the API.
   - Use `curl` commands or tools like Postman to test the API endpoints.

This comprehensive `README.md` should provide all the necessary details to set up, use, and understand the Sleep Tracker API.
