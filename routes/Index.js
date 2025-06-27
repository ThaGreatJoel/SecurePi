const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>SecurePass API Docs</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background-color: #343541;
      color: #e4e4e7;
      padding: 40px;
    }
    h1 {
      color: #fff;
      font-size: 32px;
      margin-bottom: 8px;
    }
    h2 {
      color: #10a37f;
      font-size: 22px;
      margin-top: 40px;
      border-bottom: 1px solid #444;
      padding-bottom: 6px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 12px;
    }
    th, td {
      border: 1px solid #4d4d4f;
      padding: 12px;
      text-align: left;
    }
    th {
      background-color: #444654;
      color: #ffffff;
    }
    td {
      background-color: #3c3d4a;
    }
    code {
      background-color: #444654;
      padding: 3px 6px;
      border-radius: 4px;
      font-family: monospace;
      color: #e4e4e7;
    }
    pre {
      background-color: #444654;
      padding: 14px;
      border-radius: 6px;
      overflow-x: auto;
      color: #e4e4e7;
      font-size: 14px;
    }
    .footer {
      margin-top: 60px;
      color: #888;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <title>SecurePass API Documentation</title>
  <p>SecurePass is a secure and lightweight RESTful API that allows users to store, retrieve, and manage their passwords safely online. It's built using Node.js, Express, and MongoDB, and encrypts all sensitive data before saving it to the database.

This project is designed as a backend service that can power:

Personal password manager apps

Developer tools that need secure credential storage

Educational tools to learn about secure backend design



---

Use Cases

✅ A developer building a frontend app to manage passwords
✅ A student learning how to create secure APIs with encryption
✅ Anyone who wants to self-host a simple encrypted password vault

---
</p>

  <h2>📌 Available Endpoints</h2>
  <table>
    <thead>
      <tr>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>POST</td><td><code>/api/auth/signup</code></td><td>Register a new user</td></tr>
      <tr><td>POST</td><td><code>/api/auth/login</code></td><td>Login with email and password</td></tr>
      <tr><td>POST</td><td><code>/api/vault/store</code></td><td>Save a password entry</td></tr>
      <tr><td>GET</td><td><code>/api/vault/list/:userId</code></td><td>Get all saved passwords for a user</td></tr>
    </tbody>
  </table>

  <h2>🧪 Sample Requests & Responses</h2>

  <h3>🔐 Signup</h3>
  <pre>POST /api/auth/signup
Request:
{
  "username": "joel",
  "email": "joel@example.com",
  "password": "StrongPass123!"
}

Response:
{
  "message": "User registered successfully",
  "userId": "64f4a7..."
}</pre>

  <h3>🔓 Login</h3>
  <pre>POST /api/auth/login
Request:
{
  "email": "joel@example.com",
  "password": "StrongPass123!"
}

Response:
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI..."
}</pre>

  <h3>📦 Store Password</h3>
  <pre>POST /api/vault/store
Request:
{
  "userId": "64f4a7...",
  "site": "gmail.com",
  "password": "gmail@123"
}

Response:
{
  "message": "Password saved successfully"
}</pre>

  <h3>📂 List Passwords</h3>
  <pre>GET /api/vault/list/64f4a7...

Response:
[
  {
    "site": "gmail.com",
    "password": "gmail@123"
  },
  {
    "site": "facebook.com",
    "password": "fbpass@321"
  }
]</pre>

  <div class="footer">Built with ❤️ by Joel • Styled in ChatGPT theme</div>
</body>
</html>
  `)
})

module.exports = router
