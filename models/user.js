const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ["doctor", "engineer","pilot","driver"],
        required:true
    },
    city: String,
    country:String,
})
const User = mongoose.model('User', userSchema);
module.exports = User;