var path = require("path");
var express = require("express");

module.exports = function (app) {

    // express().use("/style", express.static("assets"));

    app.use(express.static(path.join(__dirname, "../public/assets")));


    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/assets/style.css", function(req, res) {
        res.sendFile(__dirname, "assets/style.css");
    });

    // REMOVE THIS LATER
    // app.get("/friendList", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/friendList.html"));
    // });

    // whenever we get this url from the user...
    app.use( function(req, res) {

        // This function will execute.
        // Will send the user this file.
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}