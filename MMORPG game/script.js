let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];


//Getting access to all the elements
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");


const weapons = [
    {
        name: "stick",
        power: 5
    },
    {
        name: "dagger",
        power: 30
    },
    {
        name: "claw hammer",
        power: 50
    },
    {
        name: "sword",
        power: 100
    }
]

const monsters = [
    {
        name:"slime",
        level: 2,
        health: 15
    },
    {
        name: "fanged beast",
        level: 8,
        health: 60
    },
    {
        name: "dragon",
        level: 20,
        health: 300
    }
];

const locations = [
    {
        name: "town square",
        "button text":["Go to store","Go to cave","Fight dragon"],
        "button functions":[goStore,goCave,fightDragon],
        text:"You are in the town square. You see a sign that says \"store\"."
    },
    {
        name: "store",
        "button text":["Buy 10 health (10 gold)", "Buy weapon (30 gold)","Go to town square"],
        "button functions":[buyHealth, buyWeapon ,goTown],
        text: "You enter the store."
    },
    {
        name: "cave",
        "button text":["Fight Slime", "Fight Beast","Go to town square"],
        "button functions":[fightSlime, fightBeast ,goTown],
        text: "You enter the cave. You see some monsters crawling about....a perfect opportunity to grind some levels."
    },
    {
        name: "fight",
        "button text":["Attack", "Dodge","Run"],
        "button functions":[attack, dodge ,goTown],
        text: "You are fighting a monster."
    },
    {
        name: "Kill monster",
        "button text":["Go town", "Go town","Go town"],
        "button functions":[goTown, goTown ,goTown],
        text: '"AAAAAAAA" It ded.'
    },
    {
        name: "lose",
        "button text":["Replay?", "Replay?","Replay?"],
        "button functions":[restart, restart ,restart],
        text: '"AAAAAAAA" You ded get gud noob.'
    },
    {
        name: "win",
        "button text":["Replay?", "Replay?","Replay?"],
        "button functions":[restart, restart ,restart],
        text: "I always knew you could do it....now go home. 🥹"
    },
    {
        name: "easter egg",
        "button text":["7", "9","Go to town square"],
        "button functions":[pickSeven, pickNine ,restart],
        text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10."
    }
]

//initialize button
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location){
    monsterStats.style.display = "none";
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
}


function goTown(){
    update(locations[0]);
}

function goStore(){
    update(locations[1]);
}

function goCave(){
    update(locations[2])
}

function buyHealth(){
    if(health == 100){
        text.innerText = "You don't need more health!🤬"
    }
    else if(gold < 10){
        text.innerText = "Return with the good stuff 🤌"
    }
    else if(health > 90){
        gold -= 10;
        health = 100;
        text.innerText = "Get scammed kid, welcome to capitalism 😎😈"
    }
    else{
        gold -= 10;
        health += 10;
        text.innerText = "Here's a spare kidney just for you! 😄"
    }
    goldText.innerText = gold;
    healthText.innerText = health;
}

function buyWeapon(){
    if(currentWeapon < weapons.length - 1){
        if(gold >= 30){
            gold -= 30;
            currentWeapon++;
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name;
            text.innerText = "You now have a " + newWeapon + ".";
            inventory.push(newWeapon);
            text.innerText += "Your inventory: " + inventory;
        }
        else{
            text.innerText = "Get gold.";
        }
    }
    else{
        text.innerText = "You already have the strongest weapon what else do you want bro??"
        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon;
    }
}

function sellWeapon(){
    if (inventory.length > 1){
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon = inventory.shift(); //remove first weapon from inventory and put it here
        text.innerText = "You sold a "+ currentWeapon + ".";
        text.innerText += "In your inventory you have: " + inventory;
    } else{
        text.innerText = "Don't sell your only weapon!";
    }
}

function fightSlime(){
    fighting = 0;
    goFight();
}

function fightBeast(){
    fighting = 1;
    goFight();
}

function fightDragon(){
    fighting = 2;
    goFight();
}

function goFight(){
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "block"; //to change the display property
    monsterHealthText.innerText = monsterHealth;
    monsterNameText.innerText = monsters[fighting].name;

}

function attack(){
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText += "You attack with your " + weapons[currentWeapon].name + ".";
    if(isMonsterHit()){
        health -= getMonsterAttackValue(monsters[fighting].level);
    }
    else{
        text.innerText = "Missed.";
    }
    
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random()*xp) + 1;
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    monsterNameText.innerText = monsters[fighting].name;
    if(health <= 0){
        lose();
    }
    else if(monsterHealth <= 0){
        fighting === 2 ? winGame() : defeatMonster(); //=== doesnt make conversions to test equality     
    }


    if(Math.random() <= 0.1 && inventory.length !== 1){
        text.innerText += "Your " + inventory.pop() + " breaks"; //remove last item and return it
        currentWeapon--;
    }

}

function getMonsterAttackValue(level){
    let hit = (level * 5) - (Math.floor(Math.random() * xp));
    return hit;
}

function isMonsterHit(){
    return Math.random() > 0.2 || health < 20; //gives number between 0 and 1
}

function dodge(){
    text.innerText = "You dodge the attack from " + monsters[fighting].name + "."
}

function defeatMonster(){
    gold += Math.floor(monsters[fighting].level * 6.7); 
    xp += monsters[fighting].level;
    xpText.innerText = xp;
    goldText.innerText = gold;
    update(locations[4]);
}

function lose(){
    update(locations[5])
}

function winGame(){
    update(locations[6])
}

function restart(){
    xp = 0;
    health = 100;
    gold = 50;
    currentWeapon = 0;
    inventory = ["stick"];
    goldText.innerText = gold;
    healthText.innerText = health;
    xpText.innerText = xp;
    goTown();
}

function easterEgg(){
    update(locations[7]);
}

function pickNine(){
    pick(9);
}

function pickSeven(){
    pick(7);
}

function pick(guess){
    let numbers = [];
    while(numbers.length < 10){
        numbers.push(Math.floor(Math.random() * 11))
    }

    text.innerText = "You picked " + guess + ". Here are the random numbers: \n";

    for(let i = 0; i < 10; i++){
        text.innerText += numbers[i] + "\n"
    }

    if(numbers.indexOf(guess) != -1){
        text.innerText += "ADHBUTH!!!! 7 CRORE!!!"
        gold += 70000000;
        gold.innerText = gold;
    }
    else{
        text.innerText += "Galat jawab..."
        health -= 10;
        healthText.innerText = health;
        if(health <= 0){
            lose();
        }
    }
}
