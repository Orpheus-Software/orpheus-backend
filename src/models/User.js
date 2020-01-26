const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

UserSchema.pre("save", async function(next) {
    const user = this;
    const hash = await bcrypt.hash(user.password, 12);
    user.password = hash;
    next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;