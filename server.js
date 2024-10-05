// we can name this file name as we need, not necessary to name it as server
// every time we made changes to the server file we need to re run the file again

const http = require("http");
const fs = require("fs");
const _ = require("lodash"); // we can name any thing we want, but for practice purpose we are naming it as _
// by using http we can create server and we will listen to the request made by the respected address

const server = http.createServer((req, res) => {
    // lodash
    const num = _.random(0, 20);
    console.log(num);
    
    const greet = _.once(() => {
        console.log("hello");
    });

    greet();
    greet();

    // req holds all the data about the request made by the client
    // console.log("request made", req);
    console.log("request made");
    console.log(req.url, req.method); // output => / GET
    
    // set header content type
    // res.setHeader("Content-Type", "text/plain");
    // res.write("Hello");
    // res.setHeader("Content-Type", "text/html");

    // res.write("<head><link rel='stylesheet' href='#'></head>")
    // res.write("<p>hello, ninjas!!</p>");
    // res.write("<p>hello again!, ninjas!!</p>");
    // res.end();
    res.setHeader("Content-Type", "text/html");
    
    let path = "./views/";
    switch(req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        case "/about-blah":
            res.statusCode = 301; // Resource moved
            res.setHeader("Location", "/about");
            res.end();
            break;
        default:
            path += "404.html";
            res.statusCode = 404;
            break;
    }
    // send an html file

    // fs.readFile("./views/index.html", (err, data) => {
    //     if(err) {
    //         console.log(err);
    //         res.end();
    //     } else {
    //         // res.write(data);
    //         // res.end(data);
    //         res.end(data);
    //     }
    // })

    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });

});

server.listen(3000, "localhost", () => {
    console.log("listening for request on port 3000"); 
});