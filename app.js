const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes.js");

// express app

const app = express();


// connect to mongoDB
// const dbURI = "mongodb+srv://kuntumallavenkatasanjeeva2005:Sanjeeva@123@nodetuts.gzjrr.mongodb.net/?retryWrites=true&w=majority&appName=nodetuts";
// the pasword must encoded while we are using it
const dbURI = "mongodb+srv://kuntumallavenkatasanjeeva2005:Sanjeeva%40123@nodetuts.gzjrr.mongodb.net/nodetuts?retryWrites=true&w=majority";


// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect(dbURI)
  .then((result) => {
        console.log('Connected to MongoDB');
        // listen for request
        app.listen(3000);
    })
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs"); // set is used to make settings to our application which is app and we are configuring the view engine to our app

// whenever we config the view engine it looks into the view folder which we have created with that same name or if it is in diff name just config app settingd to app.set("views", "folderName")



// middleware & static files

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // using this line of code we are able to access the data which is sended by the form in the request object
// if we use use() method it just kept loading always
// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next(); // this helps us to move further in the listening routes or for next middleware steps 
// });

app.use(morgan("dev"));
// app.use(morgan("tiny"));

// mongoose and mongo sandbox routes

/*
app.get("/add-blog", (req, res) => {
    const blog = new Blog({
        title: "new blog2",
        snippet: "about my new blog",
        body: "more about my new blog..."
    });
    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
});

app.get("/all-blogs", (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch(err => console.log(err)
        )
});

app.get("/single-blog", (req, res) => {
    Blog.findById("66d1dac3818a38908a28de22")
        .then((result) => {
            res.send(result);
        })
        .catch(err => console.log(err)
        )
});

*/

// routes
app.get("/", (req, res) => {
    // res.send("<p>Home Page</p>");
    // res.sendFile("./views/index.html", { root: __dirname });

    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //   ];

    // res.render('index', { title: "Home", blogs: blogs });

    res.redirect("/blogs");
    
});

app.get("/about", (req, res) => {
    // res.send("<p>About Page</p>");
    // res.sendFile("./views/about.html", { root: __dirname });
    res.render("about", { title: "About" })
});

// redirects

// app.get("/about-us", (req, res) => {
//     res.redirect("/about");
// });


// blog routes 
app.use("/blogs", blogRoutes);



// 404 - Page

app.use((req, res) => {
    // res.status(404);
    // res.sendFile("./views/404.html", { root: __dirname });
    // OR
    // res.status(404).sendFile("./views/404.html", { root: __dirname });

    res.status(404).render("404", { title: "404 - Page Not Found" });
});