const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const authRoutes = require("./routes/authRoutes")
const vaultRoutes = require("./routes/vaultRoutes")

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/vault", vaultRoutes)

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>SecurePass API</title>
      <style>
        body {
          font-family: 'Segoe UI', sans-serif;
          background-color: #0e1117;
          color: #eaeaea;
          padding: 40px;
          line-height: 1.6;
        }
        h1 {
          color: #00e0ff;
          font-size: 32px;
        }
        h2 {
          color: #61dafb;
          margin-top: 40px;
          border-bottom: 1px solid #444;
          padding-bottom: 6px;
        }
        code, pre {
          background-color: #1a1d24;
          padding: 10px;
          border-radius: 6px;
          display: block;
          color: #fff;
          font-size: 14px;
        }
        .section {
          margin-bottom: 30px;
        }
        .footer {
          margin-top: 40px;
          font-style: italic;
          color: #888;
        }
      </style>
    </head>
    <body>
      <h1>🔐 SecurePass API</h1>
      <p>A secure password manager API using Node.js, Express, and MongoDB.</p>

      <div class="section">
        <h2>📌 AUTH ROUTES</h2>
        <pre>
POST   /api/auth/signup
→ Register a new user

POST   /api/auth/login
→ Login with email and password
        </pre>
      </div>

      <div class="section">
        <h2>📌 VAULT ROUTES</h2>
        <pre>
POST   /api/vault/store
→ Save a password for a website

GET    /api/vault/list/:userId
→ Get all saved passwords
        </pre>
      </div>

      <div class="section">
        <h2>📄 ENV VARIABLES</h2>
        <pre>
PORT=3000
MONGO_URI=your-mongodb-uri
ENCRYPTION_KEY=32-character-secret
        </pre>
      </div>

      <div class="section">
        <h2>🧪 EXAMPLE JSON</h2>
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

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB connected")
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
  })
})
.catch((err) => {
  console.error("MongoDB connection failed:", err.message)
})
