const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,      // não retorna no get
    },
    creation: {             // quando o user foi criado
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;