let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;

let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");

const monsterHealthText = document.querySelector("#monsterHealth");


const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [
      goStore,
      goCave,
      fightDragon,
    ],
    text: 
      "You are in the town square. You see a sign that says \"Store\".",
    },
    {
      name: "store",
      "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
      "button functions": [
        buyHealth,
        buyWeapon, 
        goTown,
      ],
      text: "You enter the store.",
    },
    {
      name: "cave",
      "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
      "button functions": [
        fightSlime,
        fightBeast,
        goTown
      ],
      text: "You enter the cave. You see some monsters."
    }
];

function update(location) {
  // accede a location, objeto button y primer array
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerText = location.text;
}

//TODO: goTown
function goTown() {
  update(locations[0]);
}

// TODO: goStore
function goStore() {
  update(locations[1]);
}

// TODO: goCave
function goCave() {
  update(locations[2]);
}

// TODO: fightDragon
function fightDragon() {
  button1.innerText = "Go to town square";
}

// initialize buttons

// aquí estamos primero diciendo que va hacer el botón y luego lo que guarda a hacer ese botón (no se debe usar los ())
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

//functions about buyH, buyW & gotT

function buyHealth() {
  goldText.innerText = gold -= 10;
  healthText.innerText = health += 10;
}
function buyWeapon() {}

function fightSlime() {
  
}
function fightBeast() {
  
}