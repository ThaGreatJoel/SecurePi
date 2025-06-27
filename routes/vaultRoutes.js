const express = require("express")
const router = express.Router()
const PasswordVault = require("../models/PasswordVault")
const { encrypt, decrypt } = require("../utils/crypto")

router.post("/store", async (req, res) => {
  const { userId, site, password } = req.body
  if (!userId || !site || !password) {
    return res.status(400).json({ error: "All fields are required" })
  }

  try {
    const encryptedPassword = encrypt(password)
    const entry = new PasswordVault({ userId, site, encryptedPassword })
    await entry.save()
    res.status(201).json({ message: "Password stored" })
  } catch {
    res.status(500).json({ error: "Failed to store password" })
  }
})

router.get("/list/:userId", async (req, res) => {
  const { userId } = req.params

  try {
    const entries = await PasswordVault.find({ userId })
    const decrypted = entries.map(entry => ({
      site: entry.site,
      password: decrypt(entry.encryptedPassword),
      createdAt: entry.createdAt
    }))
    res.json(decrypted)
  } catch {
    res.status(500).json({ error: "Failed to retrieve passwords" })
  }
})

module.exports = router
