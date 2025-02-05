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

//TODO: goTown
function goTown() {
  button1.innerText = "Go to store";
  button2.innerText = "Go to cave";
  button3.innerText = "Fight dragon";
  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;
  text.innerText = "You are in the town square. You see a sign that says \"Store\". ";
}

// TODO: goStore
function goStore() {
  button1.innerText = "Buy 10 health (10 gold)";
  button1.onclick = buyHealth;
  
  button2.innerText = "Buy weapon (30 gold)";
  button2.onclick = buyWeapon;
  
  button3.innerText = "Go to town square";
  button3.onclick = goTown;

  text.innerText  = "You enter the store."
}
goStore();

// TODO: goCave
function goCave() {
  button1.innerText = "Buy weapon (30 gold)";
}
goCave();

// TODO: fightDragon
function fightDragon() {
  button1.innerText = "Go to town square";
}
fightDragon();

// initialize buttons

// aquí estamos primero diciendo que va hacer el botón y luego lo que guarda a hacer ese botón (no se debe usar los ())
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

//functions about buyH, buyW & gotT

function buyHealth() {
  
}
function buyWeapon() {
  
}