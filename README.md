# Simple Node.js Auth System

A simple user registration and login system using Node.js, Express, and MongoDB.

## Requirements

- Node.js
- MongoDB

## Installation
1. Clone the repository or download the source code.
2. Install dependencies:
   ```
   npm install
   ```
3. Create a .env file in the root directory with the following content (example):

PORT=3000
MONGO_URI=mongodb://localhost:27017/testdb
JWT_SECRET=yourSecretKey

4. Run the server:

npm run dev

npm start
Usage
Open your browser and navigate to http://localhost:3000.
Use the registration form to create a new account.
Use the login form to log in with an existing account.