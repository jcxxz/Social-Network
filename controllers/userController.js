const router = require('express').Router();
const User = require('../models/User');
const Thought = require('../models/Thought');

getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json(error);
    }
};

getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}

deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}

updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}

addFriend = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}

removeFriend = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend
}
