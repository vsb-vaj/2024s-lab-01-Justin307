import * as ta from "./task-array.js"
import * as tb from "./task-bonus.js"
import * as tc from "./task-cycles.js"
import * as to from "./task-object.js"
import * as ts from "./task-strings.js"

console.log("Task Array")

ta.printArray(ta.numbers);
ta.printLength(ta.numbers);
ta.printFirstItem(ta.numbers);
ta.printLastItem(ta.numbers);
ta.printLargestItem(ta.numbers);
ta.printSmallestItem(ta.numbers);
ta.printSum(ta.numbers);
ta.printSALDifference(ta.numbers);
ta.printAverage(ta.numbers);
ta.printLargestsIndex(ta.numbers);
ta.printEvenNums(ta.numbers);
ta.printNumsMultipliedBy2(ta.numbers);

console.log("Task Bonus")

tb.drawTriangle();
tb.drawJavascriptWord();
console.log(tb.getVehiclesAndTopSpeed([
    { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
    { name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350] },
    { name: "AT-AT", measuredSpeeds: [20, 21, 20, 19] },
    ]));

console.log("Task Cycles")

console.log(tc.arrayOfMultiples(7, 5));
console.log(tc.changeDirection([0, 1, 2, 3]));
console.log(tc.biggerArray([1,2,3,4,5], [50,50]));

console.log("Task Object")

console.log(to.volumeOfBox({ width: 2, length: 5, height: 1 }));
console.log(to.personObject("Obi-wan", "Kenobi", "40"));
console.log(to.getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
    ]));
console.log(to.sortVehiclesByPrice([{name: "Executor Star Dreadnought", price: 999}, {name: "T-47 Airspeeder", price: 5}, {name: "AT-AT", price : 20}]));

console.log("Task Strings")

console.log(ts.parametrize("Javascript is the best"));
console.log(ts.giveSentenceForPerson({name: "Obi-wan", position: "Jedi", age: 40, location: "Starwars universe"}));
console.log(ts.replace("Hello Javascript"));