const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
	user: {
        type: String,
        required: true
    },
    pass: {
    	type: String,
    	required: true
    },
    isAdmin: {
    	type: Number
    }
}, {collection: 'user'});

const Usuarios = mongoose.model("user", userSchema);

module.exports = Usuarios;