var moment = require('moment');

var now = moment();

var timeStampe= now.unix();

console.log(timeStampe);
//1501668794

var currentMoment = moment.unix(1501668794);

console.log(currentMoment.format('MMMM Do YYYY h mm A'));
