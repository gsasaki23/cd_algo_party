/* 
  This is more of a free-form algo to practice some OOP
  
  Create a chair class that has the following properties and functionality:

  color
  weight
  smell
  Has a certain number of wheels (each wheel has a color and could be broken or not)
  Can be raised / lowered
  Can be reclined / not reclined
  Can be occupied / not occupied
  An instance of a person can perform a "sit" action and will update a chair to be occupied with said person

  Bonus: rig the chair with an eject functionality that ejects the current occupant out of the chair
*/

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.seat = null;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }

  isSitting() {
    return this.seat !== null;
  }

  sit(seat) {
    if (this.isSitting()) {
      console.log("Already Sitting");
    } else {
      if (seat.isOccupied()) {
        console.log("Seat is taken.");
      } else {
        console.log("Sitt");
        this.seat = seat;
        seat.occupant = this; // this user is new occupant
      }
    }
  }
}

class ChairWheel {
  constructor(color = "", isBroken = false) {
    this.color = color;
    this.isBroken = isBroken;
  }
}

class Chair {
  constructor(wheels = [], color = "black", smell = "") {
    this.color = color;
    this.wheels = wheels;
    this.smell = smell;
    this.occupant = null;
    this.isReclined = false;
    this.isRaised = false;
  }

  recline() {
    if (this.isReclined) {
      console.log("Maximally reclined, my dude.");
    } else {
      console.log("Chair reclined.");
      this.isReclined = true;
    }
  }

  raise() {
    console.log("Chair raised.");
    this.isRaised = true;
  }

  lower() {
    console.log("Chair lowered.");
    this.isRaised = false;
  }

  isOccupied() {
    console.log(`Chair is occupied: ${this.occupant !== null}`);
    return this.occupant !== null;
  }

  ejectOccupant() {
    if (this.isOccupied()) {
      console.log(
        `${this.occupant.fullName()} has been ejected out of their chair 10 feet into the air!`
      );

      const theDejectedOne = this.occupant;
      theDejectedOne.seat = null;
      this.occupant = null;

      return theDejectedOne;
    } else {
      console.log("No one to eject.");
      return null;
    }
  }
}

const you = new Person("Not", "Cool");

const timeOutChair = new Chair(
  "Red",
  [
    new ChairWheel(),
    new ChairWheel(),
    new ChairWheel(),
    new ChairWheel(),
    new ChairWheel()
  ],
  "Rebellion"
);

you.sit(timeOutChair);
you.seat.raise();
you.seat.lower();
you.seat.recline();
you.seat.recline();
const dejectedPerson = timeOutChair.ejectOccupant();
console.log(dejectedPerson);

/* 
  Not intended for students:
  
  Advanced exploration, combined with lense (UNSURE what best practice is)

  Consider: personInstance.seat.raise()
    what if the seat doesn't have the raise functionality?
      error: seat.raise is not a function

      could add raiseSeat method to person that checks if seat has that functionality
      but then end up having to add a method to person for each possible chair functionality
      this is where a lense can help? Maybe there is another design pattern for this???
*/

const { lense, lenseExe } = require("./lense");

// safely attempt to raise the seat with the lense which will check
// if seat exists, if raise exists, returns raise method if exists or null if anything doesn't exist

// no error even though seat is null
console.log(
  `lense(you, "seat.raise") when seat is null: `,
  lense(you, "seat.raise")
);

you.sit(timeOutChair);

/* 
  To safely execute "raise" method without knowing if it exists
  first need to safely have method returned from lense
  then check if lense returned null before trying to execute what the lense returned
  OR, create safe exe function that uses a lense to safely get the method
  and then execute it if it's not null (need to also be able to pass args to it)
*/
lenseExe(you, "seat.raise");

console.log(
  // "left" is an arg that will be passed to doAbarrelRoll if it gets executed
  `lenseExe(you, "seat.doAbarrelRoll", "left") returns: `,
  lenseExe(you, "seat.doAbarrelRoll", "left")
);
