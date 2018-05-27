


// var friendArray = [
//     {
//         name: "John",
//         photo: "https://johnsite.john/john.jpg",
//         // scores: ["3", "2", "5", "3", "2", "1", "4", "3", "5", "2"]
//         scores: [3, 2, 5, 3, 2, 1, 4, 3, 5, 2],
//         // totalScore: friendArray[0].scores.reduce(arraySum)
//         totalScore: function() {
//             return this.scores.reduce(arraySum);
//         }
//     },

//     {
//         name: "Stephen McStephenson",
//         photo: "http://r.ddmcdn.com/s_f/o_1/APL/uploads/2014/10/small-pets5.jpg",
//         // scores: ["5", "3", "2", "4", "3", "1", "5", "2", "4", "2"]
//         scores: [5, 3, 2, 4, 3, 1, 5, 2, 4, 2],
//         // totalScore: friendArray[1].scores.reduce(arraySum)

//     }
// ];

// function arraySum(total, num) {
//     return total + num;
// }

// // We can now use this array in any other file we want.
// module.exports = friendArray;

////////////////////////////////////////////////////////////////////////

/*

I have now realized that I may need a constructor function to create new instances and push them into the array

1. Create constructor function
2. Create two new instances for initial values.
3. Later, allow user to enter their info into the friendArray via constructor function instance.

*/


var friendArray = [];


function Friend (name, photo, scores) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;
    // this.getTotal = this.scores.reduce(total + num);
    // this.totalScore = totalScore;
    this.getTotal = function(total, num) {
        return total + num;
    }
    this.totalScore = this.scores.reduce(this.getTotal);
}

var John = new Friend("John", "http://johnsite.john/john.jpg", [3, 2, 5, 3, 2, 1, 4, 3, 5, 2]);

// console.log(John.getTotal);
// console.log(John.totalScore);

var Stephen = new Friend("Stephen McStephenson", "http://r.ddmcdn.com/s_f/o_1/APL/uploads/2014/10/small-pets5.jpg", [5, 3, 2, 4, 3, 1, 5, 2, 4, 2]);

// console.log(Stephen);
// $(friendArray).push(John);
// $(fruendArray).push(Stephen);

// console.log(friendArray);

friendArray.push(John);
friendArray.push(Stephen);

// console.log(friendArray);

module.exports = friendArray;