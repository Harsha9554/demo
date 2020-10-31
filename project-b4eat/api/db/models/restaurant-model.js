const mongoose = require("mongoose");
const ReviewSchema = require('./review-model'); 

const RestaurantSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Restaurant Name is required"],
        minlength: [3, "Restaurant Name must be aleast 3 characters or longer"]
    },
}, {timestamps: true});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = { Restaurant }