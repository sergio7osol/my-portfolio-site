const express = require('express');
const path = require('path');
const hbs = require('hbs');
const fs = require('fs');

var appRoot = process.env.PWD;
console.log("appRoot: ", appRoot);
global.__basedir = __dirname;
console.log("__basedir: ", __basedir);

const port = process.env.PORT || 3000;
let app = express();

let DIST_DIR = path.join(__dirname, "");

hbs.registerPartials(DIST_DIR + "/views/partials");

// app.set('base', '/');
// app.set('base', DIST_DIR + "/");
app.set('views', DIST_DIR + "/views");
app.set("view engine", "hbs");

app.use((req, res, next) => {
    let now = new Date().toString();
    let log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile("server.log", log + "\n", (err) => {
        if (err) {
            console.log("Unable to append to server.log");
        }
    });
    next();
});
// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });
app.use(express.static(__dirname + '/dist/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get("/", (req, res) => {
    res.render('home.hbs', {
        pageTitle: "My personal web-site. SVO",
        pageMainTitle: "Welcome to my personal web-site!",
        activeMenuItem: "home"
    });
});
app.get("/projects", (req, res) => {
    res.render('projects.hbs', {
        pageTitle: "Portfolio page. SVO",
        pageMainTitle: "The collections of my works.",
        activeMenuItem: "projects"
    });
});
app.get("/bad", (req, res) => {
    res.send({
        errorMessage: "Unable to fullfill the request."
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});