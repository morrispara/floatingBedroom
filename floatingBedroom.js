/* This is a starter with examples.  Remove the examples once you have made your own versions. */

// core variables
var messages = []; // for a sequence of messages
var choices = [];
var answer = null;

// story function variables
var name = null;
var spin = 0;

function start() {
	setup();
	wakeUp();
}


function checkAnswers(answer) {  // Function names match story scenes. Replace with your functions
    if (answer == "Lie in bed") {
        youShouldGetGoing();
    } 
    else if (answer == "Lie in bed some more") {
        youReallyShouldGetUp();
    }
}


function wakeUp(){  // FIRST STORY SCENE - WELCOMES PLAYER
   var name = prompt("what is your name?");
   story("You wake up one morning and look around. Your room looks like it usually does, and it appears to be an ordinary day. You realize that if you don’t move fast, you will be late for school! What do you do?");
   choices = ["Lie in bed", "Open the curtain", "Leave your room"];
   answer = setOptions(choices);
 }
 
function youShouldGetGoing() {  // HOW TO SET A SCENE
    story("You lay in bed for a few moments, not much is going on. You will probably be late for school if you don’t get going… ");
    choices = ["Lie in bed some more", "Open the curtain", "Leave your room"];
    answer = setOptions(choices);   
}
/*
 function youReallyShouldGetUp() {  // HOW TO SET A SCENE
    story("What are you doing? Nevermind, I know EXACTLY what you are doing. And YOU know what you need to do! GET GOING!");
    choices = ["Lie in bed even longer", "Open the curtain", "Leave your room"];
    answer = setOptions(choices);   
 }

 function whyAreYouStillLyingDown() {  // HOW TO SET A SCENE
    story("Seriously? You are not going to get up? Why the heck not? Whatever. Your choice. I give up.");
    choices = ["Lie in bed", "Open the curtain", "Leave your room",];
    answer = setOptions(choices);   
 }

 function forest() {  // HOW TO SET A SCENE
    story("There is a house made of candy\ \nThere is a fruit vender\ \nThere is a small opening in the trees with a ring of mushroom in the middle");
    choices = ["Candy house", "Fruit vender", "Field", "Hang out here", "spin in a circle"];
    answer = setOptions(choices);   
 }
*/
