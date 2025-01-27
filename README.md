# Auth System

A simple user registration and login system built with **Node.js**, **Express**, and **MongoDB**. This project allows users to securely register and log in to the system using hashed passwords and JWT-based session management.

---

## Features
- **User Registration**: Create new user accounts.
- **User Login**: Authenticate existing users.
- **Secure Passwords**: All passwords are hashed using bcrypt.
- **JWT Tokens**: Manage user sessions securely.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Dari4ok/RegisterForm.git
   cd RegisterForm
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/testdb
   JWT_SECRET=yourSecretKey
   ```

4. Start the server:
   - For production:
     ```bash
     npm start
     ```
   - For development:
     ```bash
     npm run dev
     ```

5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

---

## Prerequisites
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally or remotely)

---

## Notes
- Ensure that your MongoDB server is running and accessible via the `MONGO_URI` specified in the `.env` file.
- Replace `JWT_SECRET` in the `.env` file with a strong, unique key for token signing.

---

## License
This project is licensed under the MIT License.

