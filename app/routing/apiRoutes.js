var friends = require("../data/friends.js");



module.exports = function(app) {

    // Whenever user types this url address,
    app.get("/api/friends", function(req, res) {

        // Returns a json object consisting of the data from friends.js
        res.json(friends);
    });

}