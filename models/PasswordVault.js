const mongoose = require("mongoose")
const passwordVaultSchema = new mongoose.Schema({

userId: {
     type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
},
                  
 site: {
     type: String,
     required: true
},
                            
encryptedPassword: {
     type: String,
      required: true
},
                                        
createdAt: {
     type: Date,
     default: Date.now
}})

 module.exports = mongoose.model("PasswordVault", passwordVaultSchema)