const fs = require("fs"); // fs = filesystem

// reading files
// fs.readFile("./docs/blog1.txt", (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// })

// console.log("last line");


// writing files

// fs.writeFile("./docs/blog1.txt", "hello, user!", () => {
//     console.log("file was written");
// })

// directories

// fs.mkdir("./assets", (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("directory is created");
//     }
// });

// if(fs.existsSync("./assets")) {
//     fs.rmdir("./assets", (err) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("Directory is deleted!");
//         }
//     })
// } else {
//     fs.mkdir("./assets", (err) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("directory is created");
//         }
//     });
// }

// deleting files

if(fs.existsSync("./docs/deleteme.txt")) {
    fs.unlink("./docs/deleteme.txt", (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log("File Deleted!");
        }
    })
}


