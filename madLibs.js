//madLibs.js

/* Step 2: Declare and assign values to variables */
const timeOfDay = "bright morning";
const mathResult = 5 * 5;
const isIncredible = timeOfDay.includes("morning");
const ship = {Name:"The Black Pearl"};

/* Step 1: Paste in one of the story templates above */


const story = ` One ${timeOfDay}, I set sail on a pirate ship named ${ship.Name}.
 The endless sea stretched endlessly before us. 
 Just then, we spotted a mysterious chest floating in the water. 
'Could it be treasure?' the captain exclaimed. We hauled it aboard and opened it. 
Did you know 5 × 5 equals ${mathResult}? Incredible, right? `;


document.getElementById("madlibs-output").textContent = story;

console.log(story);

