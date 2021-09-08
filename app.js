
// string of my name
let myName =  "Ashton"; 

// number of states
const states = 50; 

// computed the results of 5 plus 4
let result = console.log(5 + 4); 

sayHello()

// saying Hello World on the console
function sayHello(){
    alert("HelloWorld!")
}

// checks the age and name of a person
function checkage(name, age){
    console.log(name, age)
    if (age < 21){
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
}

checkage('Charles', 21)
checkage('Abby', 27)
checkage("James", 18)
checkage("John", 17)

// array of my favorite veggies
let myFavoriteVeggie = ["Mushrooms", "leeks", "okra", "Brockly", "Cauliflower"];

// the loop for my veggies to go into the console
for (let i = 0; i < myFavoriteVeggie.length; i++) {
    console.log(myFavoriteVeggie[i])
}

// array of my pet
let pet = {
    name: "Mojo",
    breed: "Shizu"
};

console.log(pet.name, pet.breed)

// array of people
let people = [
    {
        name: "Ashton",
        age: 37
    },
    {
        name: "Sphen",
        age: 26
    },
    {
        name: "Michel",
        age: 12
    },
    {
        name: "courtney",
        age: 72
    },
    {
        name: "sid",
        age: 18
    }
];

// checks the age and name with the previous function
for (let i = 0; i < people.length; i++) {
    checkage(people[i].name, people[i].age);
}


function getLength(word) {
    return word.length
}


let stringLength = ("Hello World!");

if (stringLength % 2 == 0) {
    console.log('The world is nice and even!')
} else {
    console.log('The world is an odd place!')
}