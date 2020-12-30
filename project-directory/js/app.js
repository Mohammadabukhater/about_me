'use strict';

var username = prompt('please tell me what is your name ?')
alert(username + " we are glad to have you here :)");
alert(
  'welcome to my guessing game about me'
);
var userScore = 0
var myfavcolor = prompt('is my favourite color blue? (yes/no)');
//console.log('yes');

if (myfavcolor.toLowerCase() === 'yes' || myfavcolor.toLowerCase() === 'y') {
  //  console.log('I am so glad that u got it :) ');
  alert('I am so glad that u got it :) ');
  userScore++;
}
else {
  //  console.log('try again pleaes :(');
  alert('try again pleaes :(');
}
var myfavsport = prompt('is my favourite sport is football? (yes/no)');
//console.log('no');
if (myfavsport.toLowerCase() === 'YES' || myfavsport.toLowerCase() === 'y') {
  // console.log('try one more time');
  alert('try one more time');
} else {
  // console.log('good job u got it') ;
  alert('good job u got it');
  userScore++;
}
var personalexp = prompt('do you think that i am calm person? (yes/no)');
//console.log('no');
if (personalexp.toLowerCase() === "yes" || personalexp.toLowerCase() === 'y') {
  //  console.log('indeed your good person but you are wrong');
  alert('indeed your good person but you are wrong');
} else {
  //  console.log('well that is me :p');
  alert('well that is me :p');
  userScore++;
}
var personalatit = prompt('do I look like person who loves reading? (yes/no)');
//console.log('yes');
if (personalatit.toLowerCase() === 'YES' || personalatit.toLowerCase() === 'y') {
  // console.log('well who is not inlove with reading');  
  alert('well who is not inlove with reading');
  userScore++;
} else {
  //  console.log('no no no again please');
  alert('no no no again please');
}
var healthypers = prompt('do you think that I am smoker or nonsmoker? (yes/no)');
//console.log('yes');
if (healthypers.toLowerCase() === 'yes' || healthypers.toLowerCase() === 'y') {
  //  console.log('I know that it is harmful but yeah you are right');
  alert('I know that it is harmful but yeah you are right');
  userScore++;
} else {
  //console.log('I wish it is no but try again');
  alert('I wish it is no but try again');
}

var counter = 4;
alert("let\'s see if you can giess my age?");

for (var i = 0; i < 4; i++) {

  var myage = parseInt(prompt('guess how old am I?'));
  console.log(myage);
  if (myage === 28) {
    alert('thats correct well done');
    userScore++;
    break;
  } else if (myage > 28) {
    alert('you wrong too high');
  }
  else {
    alert('u r wrong too low');
  }
  counter--;
  if (counter !== 0) {
    alert('you have still ' + counter + " chancies");
  } else {
    alert("you have finish all your chancies");
  }

}

var colorarray = ['red', 'black', 'yallow', 'blue', 'brown'];
var count = 6;
for (var y = 0; y < 6; y++) {

  var colorname = prompt('can u guess my color')

  if (colorarray.indexOf(colorname) !== -1) {
    alert('that is correct');
    userScore++;
    break;
  } else {
    alert('keep trying');
  }


  count--;
  if (count !== 0) {
    alert('you have still ' + count + " chancies");
  } else {
    alert("you have finish all your chancies");
  }
} alert('your Score is ' + userScore);