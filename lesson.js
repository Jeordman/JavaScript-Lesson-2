// REVIEW + switch + inside-----------------------------
// if (1 == 1) console.log('test');
if (3 === 3) {
  // console.log('Always true')
}
if (3 == '3') {
  // console.log('Sort of true')
}
const testIfKnowledge = 'P';
// check type
// console.log(typeof testIfKnowledge)
// Test data type 'typeof' NEED TO KNOW

/** TEST -->
 * if testIfKnowledge is true log that it is
 * if it is false log something and something else in 2 console.log
 * if it is anything else, log that it failed
 */
if (testIfKnowledge === true){
  // console.log('True');
} else if (testIfKnowledge === false) {
  // console.log('Failed');
  // console.log(3);
} else {
  // console.log ('Somethine else');
}

// this is the same as ^
switch (testIfKnowledge){
    case true:
        // console.log('True');
        // break says if this is true, end the switch statement
        break;
        // you can also use 
    case false:
        // console.log('Failed');
        // console.log(3);
        break;
    default: 
        // console.log ('Somethine else');
        break;
} 

// data type list
// string, number, boolean, NaN, null, undefined, array, object
// -----------------------------------
// another way to write strings

let person = {
    firstName: `Aaron`,
    lastname:  'Forkel',
    deathYear: 2000000002,
}
//! fancy way to write strings
// add lastname to this ^
const sentence = "Hello, " + person.firstName + " " + person.lastname + ", welcome to this website. You will die in year " + person.deathYear
const newSentence = `Hello, ${person.firstName} ${person.lastname}, welcome to this website. You will die in year ${person.deathYear}`
// console.log(typeof sentence);
// functions ------------------------
/**new functions */
function sayHello(){
    console.log('hello');
}

const firstName = 'Jeordin'
const lastName = 'Callister'
const firstName2 = 'Aaron'
const lastName2 = 'Forkel'

function greet(name1, name2){
   console.log(`Hello ${name1} ${name1}`);
}

greet(firstName, lastName);
//greet(firstName2, lastName2);


function l(number1, number2){
    ////////////////console.log( `Answer: ${number1 + number2}`);
    console.log('answer', number1 / number2);
}

//add(7,10)
//add(2,10)
// const jeordin = "booty"
// l(jeordin,)
function run(day1,month1,year1){
    console.log('Will show')
    return `Current Date: ${day1}-${month1}-${year1}`
    console.log('Wont show')
}
console.log(
    run(5,7,1999)
)

//! Return ignores the log below, even if it would otherwise work

/**arrow functions */
//------------------------------------------------

//------------------------------------------------
//! interacting with objects - pt2 (bracket notation)

//------------------------------------------------
//! for loops -------------------------

//------------------------------------------------
//! while loops -------------------------


//------------------------------------------------
//! array methods -------------------------
/**toString */
//push

//...

//------------------------------------------------
//! object methods -------------------------
//------------------------------------------------
