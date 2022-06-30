//Require Mongoose
const mongoose = require('mongoose');
//shorthand for Schema constructor
const { Schema } = mongoose;

// SCHEMA
const bookSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    year: { type: Number },
    quantity: { type: Number },
    imageURL: {type: String },


});

// Create Model
const Book = mongoose.model('Book', bookSchema);

// Export Model
module.exports = Book;