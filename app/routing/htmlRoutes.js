var path = require("path");
var express = require("express");

module.exports = function (app) {

    // express().use("/style", express.static("assets"));

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // whenever we get this url from the user...
    app.use( function(req, res) {

        // This function will execute.
        // Will send the user this file.
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}