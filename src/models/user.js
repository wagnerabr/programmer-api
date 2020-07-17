const mongoose = require('mongoose');
const PointSchema = require('../utils/PointSchema');

const UserSchema = new mongoose.Schema({
    user_name: String,
    user_password: String
})

module.exports = mongoose.model("User", UserSchema);