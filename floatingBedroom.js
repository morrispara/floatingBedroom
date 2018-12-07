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
	else if (answer == "Call to the bird, politely") {
        iLikeYourFeathers();
    }
	else if (answer == "Be rude") {
        heyBirdbrain();
    }
	else if (answer == "Ignore it") {
        ignoreTheBird();
    }
}


function wakeUp(){  // lv1s1 FIRST STORY SCENE - WELCOMES PLAYER
   var name = prompt("what is your name?");
   story("You wake up one morning and look around. Your room looks like it usually does, and it appears to be an ordinary day. You realize that if you don’t move fast, you will be late for school! What do you do?");
   choices = ["Lie in bed", "Open the curtain", "Leave your room"];
   answer = setOptions(choices);
 }
 
function youShouldGetGoing() {  // lv1s2 part one of lying down loop
    story("You lie in bed for a few moments, not much is going on. You will probably be late for school if you don’t get going… ");
    choices = ["Lie in bed some more", "Open the curtain", "Leave your room"];
    answer = setOptions(choices);   
}

 function youReallyShouldGetUp() {  // lv1s3 part two of lying down loop
    story("What are you doing? Nevermind, I know EXACTLY what you are doing. And YOU know what you need to do! GET GOING!");
    choices = ["Lie in bed even longer", "Open the curtain", "Leave your room"];
    answer = setOptions(choices);   
 }

 function whyAreYouStillLyingDown() {  // lv1s4 part three of lying down loop
    story("Seriously? You are not going to get up? Why the heck not? Whatever. Your choice. I give up.");
    choices = ["Lie in bed", "Open the curtain", "Leave your room",];
    answer = setOptions(choices);   
 }
 function lookOutTheWindow() {  // lv1s5
    story("You look out your window to see a massive expanse - a landscape you never have seen before. You can see green hills and valleys, as well as bodies of water and expansive forests.  Almost like you were on top of a mountain, thousands of feet up in some unknown land. ");
    choices = ["Lie in bed", "Open the curtain", "Leave your room",];
    answer = setOptions(choices);   
}
 function openDoor() {  // lv1s6
    story("Woops! You catch yourself before falling thousands of feet. You look below, and you see a large expanse of land, one you don’t recognize. To your side, you see a fluffy white cloud, and bright blue sky as you realize that your bedroom is floating, thousands of feet in the air above a strange landscape. But there is a long, massive chain anchoring it to the ground miles below.  You know you can’t stay up here forever. You have no food (except maybe that HALF-EATEN SANDVICH from last night), and no water. What do you do next?");
    choices = ["Jump from your room", "Grab the sandvich", "Climb down the chain",];
    answer = setOptions(choices);   
}
 function grabTheSandvich() {  // lv1s7 player has one chance to make nastySandvich=true; (will be useful later in the game)
    nastySandvich = true;
	console.log("nastySandvich is "+nastySandvich);
	story("	“Hmm, maybe I should grab some food. It might be awhile before I return to my room - if I come back at all,” you think. You look for last-night’s ham-and-cheese-and-peanut-butter-and-ketchup-sandwich, put it in a baggie, and stick it in your pocket. (Uuuhhhggg, what were you thinking last night when you made this, anyway?)");
    choices = ["Jump from your room", "Climb down the chain",];
    answer = setOptions(choices);  
}
 function splat() {  // lv1s8 death scene by jumping. player must restart.
    story("	You decide to jump. As you skydive through the air, you feel the wind against your face through your hair, whipping your clothes around you. Realizing you don’t have a parachute, this might not have been a good idea. SPLAT! You hit the ground like a glob of strawberry jam, dropped off a spoon. You are dead. (Nice going, dummy) - maybe you should’ve tried a different path.");
    choices = ["Good luck choosing a path when you're dead, stupid.",];
    answer = setOptions(choices);   
}
 function descentFromTheSky() {  // lv1s9 player leaves bedroom safely
    story("You decide to climb down the chain. It’s better than staying up here forever, you guess. Link after link, you descend from the sky. As you climb down, you notice some sort of flying machines flying about. Loud, boxy things with plenty of hard edges and propellers. They don’t seem to pay attention to you. One of them, however, catches your eye. A large red, feathered thing flapping around. You think it might be a large bird of some sort. Perhaps it would respond if called to.");
    choices =["Call to the bird, politely","Be rude","Ignore it"];
    answer = setOptions(choices);   
 }
function iLikeYourFeathers() { // lv1s10 
	story("You call out to the flappy red thing, screaming past the speeding winds whipping against your face. “EXCUSE ME, GOOD BIRD, DO YOU HAVE A MOMENT?” At first, you don’t think that the bird could hear you. But then, it changes course, and begins flying your direction. It continues over and lands on the chain, maybe two or three links above you. “Hello there, Ooman,” it speaks. “Hello,” you respond. “Sorry to bother you, but I just had to let you know that I really like your feathers.” ADD MORE STORY");
    choices =["","",""];
    answer = setOptions(choices);   
 }
 function heyBirdbrain() { // lv1s11 begins first combat scene
	story("You call out to the flapping red thing, screaming past the speeding winds whipping against your face. “HEY! BIRDBRAIN!” At first, you don’t think that the bird could hear you. But then, it changes course, and begins flying your direction. “SQUACK! WHO DO YOU THINK YOU ARE? WISE GUY, EH? AIN’T NOBODY CALLS ME BIRDBRAIN. NO WAY, NO HOW.” You are pretty sure that you just made it mad. It keeps coming at you.");
    choices =["","",""];
    answer = setOptions(choices);   
 }
 function ignoreTheBird() { // lv1s12 skips past red bird
	story("You continue down, taking care not to slip and fall to your death. The strange red creature continues doing who-knows-what, not noticing you. ADD MORE STORY");
    choices =["","",""];
    answer = setOptions(choices);   
 }