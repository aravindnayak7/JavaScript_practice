//Arrays are special reference type
const points = [40, 100, 1, 5, 25, 10];
const p2=points;
console.log(p2);
p2.push(11);
console.log(points.toString());
//display elements
const fruits=["banana","orange","apple","mango"];
console.log(fruits.toString());
console.log(fruits.join("*"));

//The pop() method removes the last ele from array and returns last item
let f1=fruits.pop();
console.log(f1);

//The push() method adds a new element to an array (at the end), returns latest length
let l=fruits.push("kiwi");
console.log(1);
console.log(fruits.toString());
//Shift and Unshift will work on begining of the array
//the shift method removes the first array element and returns the removed item
f1=fruits.shift();
console.log(f1);
console.log(fruits.toString());
//the unshift() method adds a new element to an array (at the beginning)
l=fruits.unshift("Lemon");
console.log(fruits.toString());
console.log(l);

//merge multiple arrays
const arr1=["Cecilie" , "Lone"];
const arr2=["Emil" , "Tobias" , "Linus"];
const arr3=["Robin" , "Morgan"];
const allElements = arr1.concat(arr2, arr3);
console.log(allElements.toString());

//Splice - insert 2 elements after removing 2 element at index 2
//inserted without removing anything
//returns removed items array
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let f2 = fruits2.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits2.toString());
console.log(f2.toString());
//try with 0 zero
// const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
// let f3 = fruits2.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits2.toString());
// console.log(f2.toString());

//The slice() method slices out a piece of an array into a new array,
//The slice() method does not remove any elements
const fruits3 = ["Banana", "BANaNA", "Orange", "Lemon", "Apple", "Mango", "mango"];
const citrus =fruits3.slice(1);
//const citrus =fruits3.slice(1,4)// start=1 and less than 3
console.log(citrus.toString());
console.log(fruits3.toString());

//Sorting
console.log(fruits3.toString());
fruits3.sort();
console.log(fruits3.toString());
fruits3.reverse();
console.log(fruits3.toString());

//Map
//map() creates a new array from calling a function for every array element
//map() does not change the original array.
//process something on every element of array
const numbers=[4,9,16,25,12];
const newArr=numbers.map(Math.sqrt);
console.log(newArr.toString());


const newArr2 = numbers.map(myFunc);
console.log(newArr2.toString());
function myFunc(num){
    return num*10;
}