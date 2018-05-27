// Link to friends.js
var friends = require("../data/friends.js");



module.exports = function(app) {

    // Whenever user types this url address,
    app.get("/api/friends", function(req, res) {

        // Returns a json object consisting of the data from friends.js
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        // req.body.scores

        for (i = 0; i < req.body['scores[]'].length; i++) {
            // req.body.scores[i] = parseInt(req.body.scores[i]);
            req.body['scores[]'][i] = parseInt(req.body['scores[]'][i]);
        }

        // req.body.totalScore = parseInt(req.body.totalScore);
        friends.push(req.body);

        // var tempObject = req.body;

        // for (i = 0; i < req.body.scores.length; i++) {
        //     tempObject.scores[i] = parseInt(tempObject.scores[i]);
        // }

        // tempObject.totalScore = parseInt(tempObject.totalScore);

        // friends.push(tempObject);
        // console.log(req.body.\'scores[]\');
        console.log(req.body);
        // console.log(req.body.name);
        // console.log(req.body['scores[]']);
        // console.log(req.body['scoreArray[]']);
        // console.log(typeof req.body);
    })

}