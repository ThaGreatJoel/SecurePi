const express = require("express")
const router = express.Router()
const User = require("../models/User")
const bcrypt = require("bcryptjs")

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body
  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" })
  }

  try {
    const existing = await User.findOne({ email })
    if (existing) return res.status(400).json({ error: "Email already registered" })

    const user = new User({ username, email, hashedPassword: password })
    await user.save()
    res.status(201).json({ message: "Signup successful", userId: user._id })
  } catch {
    res.status(500).json({ error: "Signup failed" })
  }
})

router.post("/login", async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" })
  }

  try {
    const user = await User.findOne({ email })
    if (!user) return res.status(401).json({ error: "Invalid credentials" })

    const isMatch = await bcrypt.compare(password, user.hashedPassword)
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" })

    res.json({ message: "Login successful", userId: user._id })
  } catch {
    res.status(500).json({ error: "Login failed" })
  }
})

module.exports = router
