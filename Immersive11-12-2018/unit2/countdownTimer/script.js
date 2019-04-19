//console.log("sanity check");

function updateTimer(){
    // new Date() will create a new Date object with the current time
    // where current time = the moment the line ran
    var now = new Date();
    // getTime() can be run against a Date Object, and will convert to the #
    // of millseconds since 1-1-1970
    var nowAsTimestamp = now.getTime();
    // console.log(nowAsTimestamp);
    var timeRemaining = timeStamp - nowAsTimestamp;
    var birthdaytimeRemaining = birthdaytimeStamp - nowAsTimestamp;
    console.log('bd',birthdaytimeRemaining)
    console.log('t',timeRemaining)
    
	var seconds = Math.floor((timeRemaining / 1000) % 60);
	var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
	var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
	var days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24)) % 7);
    var weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));

    var birthdayseconds = Math.floor((birthdaytimeRemaining / 1000) % 60);
	var birthdaydays = Math.floor((birthdaytimeRemaining / (1000 * 60 * 60 * 24)));
    
    // console.log(seconds);
    // console.log(minutes);

    // getElementsByClassName ALWAYS returns an Array, even if there is 0 or 1 thing
    document.getElementsByClassName('weeks')[0].innerHTML = weeks
    // querySelector will use css rules to find a match,
    // and only get the first one... NOT an array        
    document.getElementsByClassName('days')[0].innerHTML = days
    document.getElementsByClassName('bddays')[0].innerHTML = birthdaydays
    document.querySelector('.hours').innerHTML = hours
    document.querySelector('.minutes').innerHTML = minutes
    document.getElementsByClassName('seconds')[0].innerHTML = seconds
    document.getElementsByClassName('bdseconds')[0].innerHTML = birthdayseconds

    // == compares values
    // === compares values AND datatype
    // minutes = "0"
    // minutes == 0 TRUE
    // minutes === 0 NOT TRUE

    // var messageDiv = document.querySelector('.message');
    
    if(seconds === 0){
        // updatee the dom to say "Hooray, another minute closer!"
        document.querySelector('.message').innerHTML = "One minute closer to New Year!";
       
    }else if(seconds >= 5){
        document.querySelector('.message', 'img' ).innerHTML = "";
    }

}

var endDate = new Date("December 31, 2019");
var birthdayendDate = new Date("January 3, 2020");
console.log(endDate)
var timeStamp = endDate.getTime();
var birthdaytimeStamp = birthdayendDate.getTime();
console.log(timeStamp)
// setInterval will:
//  1. call the function in arg1
//  2. every arg2 milliseconds
updateTimer()
setInterval(updateTimer,1000)
