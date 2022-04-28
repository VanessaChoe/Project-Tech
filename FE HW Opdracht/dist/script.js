/********************/
/* DATATYPES PART 1 */
/********************/

// Change this to a boolean!
const aBoolean = false || true;

// Change this to a string!
const aString = "string";

// Change this to a number!
const aNumber = 0;

// Change this to a variable with no value!
// The variable does have to exist though.
const aNull = null;

// Change this variable to undefined. 
// This can be done multiple ways!
const isUndefined = undefined;

/********************/
/* DATATYPES PART 2 */
/********************/

// Change this variable to an array.
// Make sure the array contains at least 5 numbers!
const array = [
'1',
'2',
'3',
'4',
'5'];


// arr = ['1','2','3','4','5'];


// Change this variable to an object.
// Make sure this object contains at least three properties!
// Add the property "frontEnd" with the value "is fun" as a string as the final assignemnt!
const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue" };










// Don't mind this, I use this function to check your answers above!
function e() {const e = document.querySelector("#boolean p");const n = document.querySelector("#string p");const o = document.querySelector("#number p");const i = document.querySelector("#null p");const t = document.querySelector("#undefined p");const s = document.querySelector("#array p");const a = document.querySelector("#object p");if (typeof aBoolean === "boolean") {e.innerText = `Well done, aBoolean is now "${aBoolean}"`;} else {e.innerText = "aBoolean is not a boolean!";}if (typeof aString === "string") {n.innerText = `Well done, aString is now "${aString}"`;} else {n.innerText = "aString is not a string!";}if (typeof aNumber === "number") {o.innerText = `Well done, aNumber is now "${aNumber}"`;} else {o.innerText = "aNumber is not a number!";}if (aNull === null) {i.innerText = `Well done, null is now ${aNull}`;} else {i.innerText = "aNull is not null!";}if (isUndefined === undefined) {t.innerText = `Well done, isUndefined is now ${isUndefined}`;} else {t.innerText = "isUndefined is not undefined!";}if (Array.isArray(isArray)) {if (isArray.length > 4) {if (isArray.filter(e => {return !isNaN(parseFloat(e)) && isFinite(e);}).length > 4) {s.innerText = "Well done! Array now contains 5 numberic values!";} else {s.innerText = "isArray now contains 5 or more values! But they're not numbers yet!";}} else {s.innerText = "isArray is now an array! Now add 5 number values to it!";}} else {s.innerText = "isArray is not yet an array!";}if (Object.prototype.toString.call(isObject) === "[object Object]") {if (Object.keys(isObject).length > 2) {if (isObject.frontEnd && isObject.frontEnd === "is fun") {a.innerText = "Well done, the object now has at least 3 properties including the frontEnd is fun one!";} else {a.innerText = "Great! isObject now has three properties! Now complete the final assignment for this course!";}} else {a.innerText = "isObject is now an object! Now add three unique properties to it!";}} else {a.innerText = "isObject is not yet an object!";}}e();