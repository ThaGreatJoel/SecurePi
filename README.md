# SecurePass API Documentation

SecurePass is a RESTful API built with Node.js and Express.js for secure password storage and management. It features encrypted user authentication and a vault for storing service credentials, styled with a clean UI.
⚠️THIS REPO MAY SOON BE CHANGE TO PRIVATE
## 🔐 Features
- User Registration and Login with JWT
- Password Vault (Store and Retrieve Encrypted Passwords)
- RESTful Endpoints (POST, GET)
- Beautiful API Documentation Page
- Responsive Sidebar with Mobile Menu Toggle

## 🎯 Purpose & Use Cases
SecurePass is built for developers and security-focused users who want:
- A simple backend API for building password manager apps
- Secure storage of credentials for multiple services/sites
- A lightweight API to integrate into mobile or web-based apps
- A learning project to understand encryption, authentication, and API architecture

### Example Use Ideas:
- 🔐 Personal password manager app with browser extension
- 🔐 Internal vault for startup credentials & admin tools
- 🔐 Educational project for learning Node.js, JWT, MongoDB
- 🔐 Secure auth module to integrate with another SaaS app

## 🚀 Installation
```bash
git clone https://github.com/ThaGreatJoel/SecurePass.git
cd SecurePass
npm install
```

### Create a `.env` file
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## 🖥️ Run the App
```bash
node index.js
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📘 API Endpoints
### Auth
- `POST /api/auth/signup` – Register a user
- `POST /api/auth/login` – Login and get token

### Vault
- `POST /api/vault/store` – Store a password
- `GET /api/vault/list/:userId` – Get stored passwords

## 🧩 UI Docs Page
- Route: `/docs`
- Features side navigation, styled cards, mobile menu button


## 🛡️ Tech Stack
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Vanilla HTML/CSS with GPT Theme
Contribution & License sections


