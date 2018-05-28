


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
    // this.scores = scores;
    this['scores[]'] = scores;
    // this.getTotal = this.scores.reduce(total + num);
    // this.totalScore = totalScore;
    // this.getTotal = function(total, num) {
    //     return total + num;
    // }
    // this.totalScore = this['scores[]'].reduce(this.getTotal);
}

var John = new Friend("John", "https://images.pexels.com/photos/683381/pexels-photo-683381.jpeg?auto=compress&cs=tinysrgb&h=350", [3, 2, 5, 3, 2, 1, 4, 3, 5, 2]);
friendArray.push(John);

// console.log(John.getTotal);
// console.log(John.totalScore);

var Stephen = new Friend("Stephen McStephenson", "http://r.ddmcdn.com/s_f/o_1/APL/uploads/2014/10/small-pets5.jpg", [5, 3, 2, 4, 3, 1, 5, 2, 4, 2]);
friendArray.push(Stephen);

// console.log(Stephen);
// $(friendArray).push(John);
// $(fruendArray).push(Stephen);

// console.log(friendArray);


// console.log(friendArray);

var Bradley = new Friend("Bradley the Bro", "http://quimbys.com/blog/wp-content/uploads/2008/01/frat_boy.jpg", [1, 1, 5, 4, 5, 5, 1, 5, 2, 1]);
friendArray.push(Bradley);

var Greg = new Friend("Good Guy Greg", "http://i0.kym-cdn.com/entries/icons/mobile/000/005/681/GoodGuyGreg.jpg", [5, 5, 3, 5, 2, 5, 3, 3, 4, 3]);
friendArray.push(Greg);

var Allison = new Friend("Allison", "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=350", [3, 5, 1, 2, 4, 1, 4, 2, 2, 5]);
friendArray.push(Allison);
module.exports = friendArray;