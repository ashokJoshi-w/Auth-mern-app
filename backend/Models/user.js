const e = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: {
        typeof: String,
        required: true
    },
    email: {
        typeof: String,
        required: true,
        unique: true
    },
    password: {
        typeof: String,
        required: true
    }
});

const UserModels = mongoose.model('User', userSchema);

module.exports = UserModels;