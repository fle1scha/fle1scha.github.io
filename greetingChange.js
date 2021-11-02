var greetings = ["Hi", "Molo", "Hello", "Bonjour", "Sawubona", "Hey there"];
var text = ["software engineer", "rugby player", "data scientist", "cliff jumper", "amateur music festival organiser", "economist"];

var counter = 0;
var jobCounter = 0;
var elem = document.getElementById("hello");
var elemProfession = document.getElementById("profession")

var inst = setInterval(change, 2000);

function change() {
  elem.innerHTML = greetings[counter];
  elemProfession.innerHTML = text[jobCounter]
  counter++;
  if (counter >= greetings.length) {
    counter = 0;
    jobCounter++;
  if (jobCounter >= text.length) {
      jobCounter = 0;
      // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    }
  }
}

