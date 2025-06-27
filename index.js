const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

// Route files
const homeRoute = require("./routes/host")
const authRoutes = require("./routes/authRoutes")
const vaultRoutes = require("./routes/vaultRoutes")

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

// Mount routes
app.use("/", homeRoute)
app.use("/api/auth", authRoutes)
app.use("/api/vault", vaultRoutes)

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected")
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message)
  })



