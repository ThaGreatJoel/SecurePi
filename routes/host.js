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

// API Tester page 
router.get("/apitester", (req, res) => {
  res.sendFile(path.join(__dirname, "../docs/test.html"))
})

module.exports = router


