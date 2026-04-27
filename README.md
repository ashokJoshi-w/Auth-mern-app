# 🔐 Auth MERN App (JWT Authentication)

A full-stack authentication system built using the MERN stack (MongoDB, Express, React, Node.js). This project demonstrates secure user authentication using JWT tokens, along with both client-side and server-side validation.

> ⚠️ Note: This project is currently under development and not fully complete.

---

## 🚀 Features

### 🔑 Authentication
- User Signup & Login
- JWT-based Authentication
- Token storage on client side
- Protected routes (Private Routing)

### 🛡️ Security
- Server-side validation using Joi
- Client-side form validation
- Middleware to intercept and verify JWT tokens
- Secure API access

---

## 🖥️ Frontend (React)

- Routing using React Router
- Private Routes (accessible only after login)

### Pages

#### Login Page
- Form validation
- API integration
- Store JWT token after login

#### Signup Page
- Form validation
- API integration

#### Home Page
- Displays logged-in username
- Logout functionality
- Calls protected `/products` API using JWT

---

## ⚙️ Backend (Node.js + Express)

- REST API for authentication
- JWT Token generation & verification
- Middleware for protected routes
- Server-side validation using Joi
- MongoDB for storing user data

---


## 🛠️ Tech Stack

- Frontend: React.js, React Router
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Token)
- Validation: Joi

---

This is a learning project, but suggestions and improvements are welcome!

---
