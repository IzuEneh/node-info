const express = require("express");
const path = require("path");
let http = require("http");
let fs = require("fs");

const app = express();
const port = 8080;
const options = {
	root: path.join(__dirname),
};

app.get("/", function (req, res) {
	res.sendFile("index.html", options);
});

app.get("/about", function (req, res) {
	res.sendFile("about.html", options);
});

app.get("/contact-me", function (req, res) {
	res.sendFile("./contact-me.html", options);
});

app.all("*", function (req, res) {
	res.sendFile("404.html", options);
});

app.listen(port, function () {
	console.log(`Example app listening on port ${port}!`);
});
