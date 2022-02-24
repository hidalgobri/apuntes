// USE STRICT ---------------------
/*
"use strict";
- Se pone así al inicio del documento. - --- - Significa que no puedo utilizar variables que no estén declaradas.
  variable declarada --> let hola;
  variable no declarada --> hol = "a";
- Ejm:
'use strict';
holaa = "Hola"; //error, variable no declarada
*/

// THIS --------------------------
/*
Funciona de manera diferente en los siguientes casos
1. global context
1.1 sin 'use strict';
*/
console.log(this) // window

function hola()
{
  let que ="";
  return console.log(this);  //window
}

/*
1.2 con 'use strict';
*/
console.log(this) // undefinied

function hola2()
{
  let que ="";
  return console.log(this);  //undefinied
}


/*
2. objeto
2.1 solo this --> se refiere al objeto en el que está metido el this
Ejm 1:
*/
const america = {
  name: 'The United States of America',
  yearFounded: 1776,
 funciont: function(){
   return console.log(this);
 } 
}


america.funciont() // imprime ...
/*{
  name: 'The United States of America',
  yearFounded: 1776,
  funciont: ƒ funciont()
}*/

/*Ejm 2*/
const america2 = {
  name: 'The United States of America',
  yearFounded: 1776,
  details: {
    symbol: 'eagle',
    currency: 'USD',
    printDetails: function () {
      console.log(
        `${this.symbol}`
      )
    },
  },
}
america2.details.printDetails() //'[object Object]'

/*
2.2 this.propiedad 
Ejm 3*/

const america3 = {
  name: 'The United States of America',
  yearFounded: 1776,
  details: {
    symbol: 'eagle',
    currency: 'USD',
    printDetails() {
      console.log(
        `The symbol is the ${this.symbol} and the currency is ${this.currency}.`
      )
    },
  },
}

america3.details.printDetails()

/*
3. function constructor (sirve para crear un objeto. Para que se vuelva objeto se usa el new)
*/
function Country(name, yearFounded) {
  this.name = name;
  this.yearFounded = yearFounded;

  this.describe = function () {
    console.log(`${this.name} was founded in ${this.yearFounded}.`)
  }
}

const americaCountry = new Country('The United States of America', 1776);

americaCountry.describe(); //'The United States of America was founded in 1776.' 
/*
4. class constructor
*/
class Country2 {
  constructor(name, yearFounded) {
    this.name = name
    this.yearFounded = yearFounded
  }

  describe() {
    console.log(`${this.name} was founded in ${this.yearFounded}.`)
  }
}

const americaC2 = new Country('The United States of America', 1776)

americaC2.describe()
/*
5. dom
Therefore, as you can see, this refers to the targeted element, which is the element we added an event listener to.
*/
const button = document.createElement('button')
button.textContent = 'Click me'
document.body.append(button)

button.addEventListener('click', function (event) {
  console.log(this) //<button>Click me</button>
})

// FUNCTIONS ------------------------
// Formas de definir una funcion
// 1. function declaration .- 
function calcRectArea(width, height) {
  return width * height;
}

console.log(calcRectArea(5, 6));
// expected output: 30

// 2. function expression.- 
const getRectArea = function(width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));
// expected output: 12

//------------------------------------
const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
}

function summary() {
  console.log(`${this.title} was written by ${this.author}.`)
}

summary() // undefined was written by undefined.'

summary.call(book) //'Brave New World was written by Aldous Huxley.'
// or:
summary.apply(book) //'Brave New World was written by Aldous Huxley.'
//---------------------------------------

console.log("---------");

function longerSummary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
  )
}

longerSummary.call(book, 'dystopian', 1932)