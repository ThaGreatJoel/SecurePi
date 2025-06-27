// routes/host.js
const express = require("express")
const path = require("path")
const router = express.Router()

// Home page
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../docs/home.html"))
})

// API Docs page
router.get("/docs", (req, res) => {
  res.sendFile(path.join(__dirname, "../docs/docs.html"))
})

module.exports = router


