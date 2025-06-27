const crypto = require("crypto")

const algorithm = "aes-256-ctr"
const secretKey = process.env.ENCRYPTION_KEY
const ivLength = 16

function encrypt(text) {
  const iv = crypto.randomBytes(ivLength)
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey), iv)
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()])
  return iv.toString("hex") + ":" + encrypted.toString("hex")
}

function decrypt(hash) {
  const [ivHex, encryptedHex] = hash.split(":")
  const iv = Buffer.from(ivHex, "hex")
  const encryptedText = Buffer.from(encryptedHex, "hex")
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey), iv)
  const decrypted = Buffer.concat([decipher.update(encryptedText), decipher.final()])
  return decrypted.toString()
}

module.exports = { encrypt, decrypt }
