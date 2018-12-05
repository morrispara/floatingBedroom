/* This is a starter with examples.  Remove the examples once you have made your own versions. */

// core variables
var messages = []; // for a sequence of messages
var choices = [];
var answer = null;
var nastySandvich = false;
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
	else if (answer == "Lie in bed even longer") {
        whyAreYouStillLyingDown();
    }
	else if (answer == "Open the curtain") {
        lookOutTheWindow();
    }
	else if (answer == "Leave your room") {
        openDoor();
    }
	else if (answer == "Grab the sandvich") {
        grabTheSandvich();
    }
	else if (answer == "Jump from your room") {
        splat();
    }
		else if (answer == "Climb down the chain") {
        descentFromTheSky();
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
 function lookOutTheWindow() {  // HOW TO SET A SCENE
    story("You look out your window to see a massive expanse - a landscape you never have seen before. You can see green hills and valleys, as well as bodies of water and expansive forests.  Almost like you were on top of a mountain, thousands of feet up in some unknown land. ");
    choices = ["Lie in bed", "Open the curtain", "Leave your room",];
    answer = setOptions(choices);   
}
 function openDoor() {  // HOW TO SET A SCENE
    story("Woops! You catch yourself before falling thousands of feet. You look below, and you see a large expanse of land, one you don’t recognize. To your side, you see a fluffy white cloud, and bright blue sky as realize that your bedroom is floating, thousands of feet in the air above a strange landscape. But there is a long, massive chain anchoring it to the ground miles below.  You know you can’t stay up here forever. You have no food (except maybe that HALF-EATEN SANDVICH from last night), and no water. What do you do next?");
    choices = ["Lie in bed", "Grab the sandvich", "Leave your room",];
    answer = setOptions(choices);   
}
 function grabTheSandvich() {  // HOW TO SET A SCENE
    nastySandvich = true;
	console.log("nastySandvich is "+nastySandvich);
	story("	“Hmm, maybe I should grab some food. It might be awhile before I return to my room - if I come back at all,” you think. You look for last-night’s ham-and-cheese-and-peanut-butter-and-ketchup-sandwich, put it in a baggie, and stick it in your pocket. (Uuuhhhggg, what were you thinking last night when you made this, anyway?)");
    choices = ["Jump from your room", "Climb down the chain",];
    answer = setOptions(choices);  
}
 function splat() {  // HOW TO SET A SCENE
    story("	You decide to jump. As you skydive through the air, you feel the wind against your face through your hair, whipping your clothes around you. Realizing you don’t have a parachute, this might not have been a good idea. SPLAT! You hit the ground like a glob of strawberry jam, dropped off a spoon. You are dead. (Nice going, dummy) - maybe you should’ve tried a different path.");
    choices = ["Good luck choosing a path when you're dead, stupid.",];
    answer = setOptions(choices);   
}
 function descentFromTheSky() {  // HOW TO SET A SCENE
    story("You decide to climb down the chain. It’s better than staying up here forever, you guess. Link after link, you descend from the sky. As you climb down, you notice some sort of flying machines flying about. Loud, boxy things with plenty of hard edges and propellers. They don’t seem to pay attention to you. One of them, however, catches your eye. A large red, feathered thing flapping around. You think it might be a large bird of some sort. Perhaps it would respond if called to.");
    choices =["Call to the bird politely","Be rude","Ignore it"];
    answer = setOptions(choices);   
 }
