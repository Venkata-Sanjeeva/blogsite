const mongoose = require("mongoose");
const Schema = mongoose.Schema; // it creates a new constructive

// now it creates new object
// schema defines the structure of our model like what we need to insert and what we have commonly required things etc
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema); // using this line is needed to search in the database like we just previously created the blogs collection in the db

// the passing argument is type correctly because it adds plural form of the word and it search for it in the DB

module.exports = Blog;