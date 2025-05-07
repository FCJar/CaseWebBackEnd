const mongoose = require("mongoose");

async function startDB() {
    await mongoose.connect('mongodb+srv://filipej:lHXdJH2YuI5ZM5Lq@cluster0.w3iyfmt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
}

module.exports = startDB;