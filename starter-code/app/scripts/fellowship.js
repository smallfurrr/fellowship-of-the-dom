console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body

  var middleEarth = document.createElement('section');
//  middleEarth.setAttribute("id", "middleEarthDiv");
  document.body.appendChild(middleEarth);

  var shire = document.createElement('article');
  shire.setAttribute("id", "shireDiv");
  var shireH1 = document.createElement('h1');
  shireH1.textContent = "The Shire";
  shire.appendChild(shireH1);
  middleEarth.appendChild(shire);

  var rivendell = document.createElement('article');
//  shire.setAttribute("id", "shireDiv");
  var rivendellH1 = document.createElement('h1');
  rivendellH1.textContent = "Rivendell";
  rivendell.appendChild(rivendellH1);
  middleEarth.appendChild(rivendell);

  var mordor = document.createElement('article');
//  shire.setAttribute("id", "shireDiv");
  var mordorH1 = document.createElement('h1');
  mordorH1.textContent = "Mordor";
  mordor.appendChild(mordorH1);
  middleEarth.appendChild(mordor);

}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  // give each hobbit a class of hobbit
var hobbitList = document.createElement('ul');
//var document.createElement('li');

//wrapper.id = 'wrapper';
var names = [];
for (var i = 0; i < hobbits.length; i++) {
  names[i] = document.createElement('li');
  names[i].textContent = hobbits[i];
  hobbitList.appendChild(names[i]);
  console.log(names[i]);
}
shireDiv.appendChild(hobbitList);

}

makeHobbits();
var frodo = body.querySelectorAll('li')[0];

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked

  var theRing = document.createElement('div');
  theRing.setAttribute("id", "the-ring");
  theRing.setAttribute("class", "magic-imbued-jewelry");
  frodo.appendChild(theRing);

}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
