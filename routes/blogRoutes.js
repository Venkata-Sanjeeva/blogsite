const express = require("express");
const Blog = require("../models/blog.js");

const router = express.Router(); // router is like a mini app which can't do anything by standing alone and we must use this inside of the app

// blog routes

router.get("/", (req, res) => {
    Blog.find().sort({ createdAt: -1})
        .then((result) => {
            res.render("index", { title: "All Blogs", blogs: result })
        })
        .catch( err => console.log(err)
        )
})

router.get("/create", (req, res) => {
    res.render("create", { title: "Create a Blog" });
});

router.post("/", (req, res) => {
    console.log(req.body);
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect("/blogs");
        })
        .catch(err => console.log(err)
        )
});

router.get("/:id", (req, res) => {
    const id = req.params.id // the id is the keyname of the value which you have in the url and you need to access the id with that keyname only
    // console.log(id);
    Blog.findById(id)
        .then(result => {
            res.render("details", { blog: result, title: "Blog Details" })
        })
        .catch(err => {
            res.status(404).render("404", { title: "Blog not found" })
        })
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            // here we are redirecting to any page because we are still in the fetching process which is made by the browser and it is a ajax request so that we send a response back to it, instead of redireting to some other page
            res.json({ redirect: "/blogs"});
        })
        .catch(err => console.log(err)
        )
});

module.exports = router;