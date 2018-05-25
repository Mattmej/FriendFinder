


var friendArray = [
    {
        name: "John",
        photo: "https://johnsite.john/john.jpg",
        // scores: ["3", "2", "5", "3", "2", "1", "4", "3", "5", "2"]
        scores: [3, 2, 5, 3, 2, 1, 4, 3, 5, 2],
        // totalScore: friendArray[0].scores.reduce(arraySum)
        totalScore: function() {
            return this.scores.reduce(arraySum);
        }
    },

    {
        name: "Stephen McStephenson",
        photo: "http://r.ddmcdn.com/s_f/o_1/APL/uploads/2014/10/small-pets5.jpg",
        // scores: ["5", "3", "2", "4", "3", "1", "5", "2", "4", "2"]
        scores: [5, 3, 2, 4, 3, 1, 5, 2, 4, 2],
        // totalScore: friendArray[1].scores.reduce(arraySum)

    }
];

function arraySum(total, num) {
    return total + num;
}

// We can now use this array in any other file we want.
module.exports = friendArray;