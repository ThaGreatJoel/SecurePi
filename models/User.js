const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  hashedPassword: { type: String, required: true }
})

userSchema.pre("save", async function (next) {
  if (!this.isModified("hashedPassword")) return next()
  this.hashedPassword = await bcrypt.hash(this.hashedPassword, 10)
  next()
})

module.exports = mongoose.model("User", userSchema)
