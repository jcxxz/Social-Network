const router = require('express').Router();
const Thought = require('../models/Thought');
const User = require('../models/User');

getThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find({});
        res.json(thoughts);
    } catch (error) {
        res.status(500).json(error);
    }
};

getThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        res.json(thought);
    } catch (error) {
        res.status(500).json(error);
    }
};

createThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body); 
        res.json(thought);
    } catch (error) {
        res.status(500).json(error);
    }
};

deleteThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndDelete(req.params.id);
        res.json(thought);
    } catch (error) {
        res.status(500).json(error);
    }
}

updateThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.id);
        res.json(thought);
    } catch (error) {
        res.status(500).json(error);
    }
}

//reactions routes

createReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.id);
        res.json(thought);
    } catch (error) {
        res.status(500).json(error);
    }
}

deleteReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.id);
        res.json(thought);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getThoughts,
    getThoughtById,
    createThought,
    deleteThought,
    updateThought,
    createReaction,
    deleteReaction
};
