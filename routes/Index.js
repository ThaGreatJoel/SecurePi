const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>SecurePass API</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #ffffff;
          color: #111;
          margin: 0;
          padding: 40px;
          line-height: 1.6;
        }

        h1 {
          font-size: 28px;
          margin-bottom: 10px;
          color: #202124;
        }

        h2 {
          font-size: 20px;
          color: #1967d2;
          margin-top: 40px;
          border-bottom: 1px solid #ccc;
          padding-bottom: 5px;
        }

        a {
          color: #1967d2;
          text-decoration: none;
        }

        .section {
          margin-bottom: 30px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
        }

        th, td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
        }

        th {
          background-color: #f1f3f4;
          color: #333;
        }

        code {
          background-color: #f1f3f4;
          padding: 2px 4px;
          border-radius: 4px;
          font-family: monospace;
        }

        pre {
          background-color: #f5f5f5;
          padding: 15px;
          border-radius: 6px;
          overflow-x: auto;
        }

        .footer {
          margin-top: 40px;
          color: #666;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <h1>SecurePass API Reference</h1>
      <p>This API allows users to register, log in, and store encrypted passwords securely.</p>

      <div class="section">
        <h2>Endpoints</h2>
        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Endpoint</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>POST</strong></td>
              <td><code>/api/auth/signup</code></td>
              <td>Registers a new user</td>
            </tr>
            <tr>
              <td><strong>POST</strong></td>
              <td><code>/api/auth/login</code></td>
              <td>Logs in a user with email and password</td>
            </tr>
            <tr>
              <td><strong>POST</strong></td>
              <td><code>/api/vault/store</code></td>
              <td>Saves a password entry</td>
            </tr>
            <tr>
              <td><strong>GET</strong></td>
              <td><code>/api/vault/list/:userId</code></td>
              <td>Fetches all saved passwords for a user</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="section">
        <h2>Environment Variables</h2>
        <pre>
PORT=3000
MONGO_URI=mongodb+srv://...
ENCRYPTION_KEY=32-character-secret
        </pre>
      </div>

      <div class="section">
        <h2>Example Requests</h2>
        <pre>
POST /api/auth/signup
{
  "username": "joel",
  "email": "joel@example.com",
  "password": "StrongPass123!"
}

POST /api/vault/store
{
  "userId": "abc123",
  "site": "gmail.com",
  "password": "gmail@123"
}
        </pre>
      </div>

      <div class="footer">
        Built with ❤️ by Joel
      </div>
    </body>
    </html>
  `)
})

module.exports = router
