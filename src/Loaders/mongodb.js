const mongoose = require("mongoose");

async function startDB() {
    await mongoose.connect('mongodb+srv://filipej:04IZdl8HVkpAWrbj@cluster0.w3iyfmt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
}

module.exports = startDB;