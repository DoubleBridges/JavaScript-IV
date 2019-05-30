/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
	constructor(attributes) {
		this.createdAt = attributes.createdAt;
		this.name = attributes.name;
		this.dimensions = attributes.dimensions;
	}
	destroy() {
		return `${this.name} was removed from the game.`;
	}
};


/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
class CharacterStats extends GameObject {
	constructor(attributes) {
		super(attributes);
		this.healthPoints = attributes.healthPoints;
	}
	takeDamage() {
		return `${this.name} took damage`;
	}
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
class Humanoid extends CharacterStats {
	constructor(attributes) {
		super(attributes);
		this.team = attributes.team;
		this.weapons = attributes.weapons;
		this.language = attributes.language;
	}
	greet() {
		return `${this.name} offers a greeting in ${this.language}.`;
	}
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 1,
		height: 1,
	},
	healthPoints: 5,
	name: 'Bruce',
	team: 'Mage Guild',
	weapons: [
		'Staff of Shamalama',
	],
	language: 'Common Tongue',
});

const swordsman = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 2,
		height: 2,
	},
	healthPoints: 15,
	name: 'Sir Mustachio',
	team: 'The Round Table',
	weapons: [
		'Giant Sword',
		'Shield',
	],
	language: 'Common Tongue',
});

const archer = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 1,
		width: 2,
		height: 4,
	},
	healthPoints: 10,
	name: 'Lilith',
	team: 'Forest Kingdom',
	weapons: [
		'Bow',
		'Dagger',
	],
	language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
class Villain extends Humanoid{
	constructor(attributes) {
		super(attributes);
	}
	attack() {
		return `${this.name} strikes at our Hero with his ${this.weapons[Math.floor((Math.random() * 10) + 1) % 2]}`;
	}
	attackStrength() {
		return Math.floor((Math.random() * 10) + 1);
	}
	dodge() {
		return `Oh no! Our Hero ${villageIdiot.name} has missed!`;
	}
	getsHit() {
		return `Score one for the good guys!`;
	}
}
class Hero extends Humanoid{
	constructor(attributes) {
		super(attributes);
	}
	attack() {
		return `${this.name} strikes at the dark one with his ${this.weapons[Math.floor((Math.random() * 10) + 1) % 2]}`;
	}
	attackStrength() {
		return Math.floor((Math.random() * 10) + 1);
	}
	dodge() {
		return `${this.name} is too quick!`;
	}
	getsHit() {
		return `${nemisis.name} will pay for that!`;
	}
}





const nemisis = new Villain({
	createdAt: new Date(),
	dimensions: {
		length: 1,
		width: 2,
		height: 4,
	},
	healthPoints: 25,
	name: 'Necronomicon',
	team: 'The Upside Down',
	weapons: [
		'Sharp Words',
		'Foul Breath',
	],
	language: 'Gibberish',
});

const villageIdiot = new Hero({
	createdAt: new Date(),
	dimensions: {
		length: 1,
		width: 2,
		height: 4,
	},
	healthPoints: 25,
	name: 'Bruce Campbell',
	team: "'Murica",
	weapons: [
		'Boomstick',
		'Chainsaw',
	],
	language: "'Murican",
});

function toTheDeath(player1, player2) {
	let p1Health = player1.healthPoints;
	let p2Health = player2.healthPoints;
	let p1Attack;
	let p2Attack;
	let victor = player1;
	let defeated = player2;
	let p1 = player1;
	let p2 = player2

	console.log(`${player2.name}: You will never defeat me ${player1.name}!`);
	console.log(`${player1.name}: Oh yeah? I won't even break a sweat.`)
	console.log(`${player1.name} Health: ${p1Health}`)
	console.log(`${player2.name} Health: ${p2Health}`)

	const fight = function () {

		while (p1Health > 0 && p2Health > 0) {
			p1Attack = p1.attackStrength();
			console.log(p1.attack());

			if (p1Attack % 2 === 0) {
				console.log(p2.getsHit());
				console.log(`${p2.name} Health Loss: -${p1Attack}`)
				p2Health -= p1Attack;
			}
			else {
				console.log(p2.dodge());
			}

			p2Attack = p2.attackStrength();
			console.log(p2.attack());

			if (p2Attack % 2 === 0) {
				console.log(p1.getsHit());
				console.log(`${p1.name} Health Loss: -${p2Attack}`)
				p1Health -= p2Attack;
			}
			else {
				console.log(p1.dodge());
			}
			console.log(`${player1.name} Remaining Health: ${p1Health}`)
			console.log(`${player2.name} Remaining Health: ${p2Health}`)
		}

	}

	fight();

	if (p2Health > p1Health) {
		victor = player2;
		defeated = player1;
	}

	let outcome = `${victor.name} has carried the day for ${victor.team} and sent ${defeated.name} wimpering back to ${defeated.team}.`
	
	console.log(outcome);
};

toTheDeath(villageIdiot, nemisis);

