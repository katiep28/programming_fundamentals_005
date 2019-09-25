// =============== PART 1 - Advanced Objects ================

/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/
function size(object) {
 
   let count = 0;
    for (let key in object) { 
      count++;
      }
    return count;

    // counld have done
    //  return Object.keys(object).length;

}

/*
  This function receives an object, whose values will all be numbers, and returns the smallest number in the object.
*/

function min(object) {
  let valueArray = Object.values(object);
  let currentSmallest = valueArray[0];
 for (let i=0; i < valueArray.length; i++) {

      if   (valueArray[i] < currentSmallest){
        currentSmallest = valueArray[i];
      } 
 }
return currentSmallest;
}

/*
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
function max(object) {
  let valueArray = Object.values(object);
  let currentLargest = valueArray[0];

 valueArray.forEach(function(num){
      if (num > currentLargest){
        currentLargest = num;
      } 
}
 )
return currentLargest;
}

/*
  This function receives an object, and will return a clone of this object - i.e. a new object with the same key-value pairs.
*/
function clone(object) {
  let newObject = Object.assign({},object);
  return newObject
}

/*
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
*/
function get(object,key) {
  console.log (object[key]);
  return object[key];
}

/*
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object,key) {
  console.log (object[key]);
  if (object[key] === null || typeof object[key] === "boolean"){
    return true;
}
   if (object[key]){
     return true;
   }
    else
    {
      return false;
   }
  
}

/*
  This function receives an object, whose values will all be numbers, and returns the sum of all these numbers.
*/

function sum(object){
  // get a running total of all the values in the object
  let total = 0;
  
  for (let key in object) {
  
    let value = object[key];
    if (typeof value === "number") {
       total = value + total;   
    // total += object[key];
    }
  }
  return total;
}
  

/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/

function invert(object){

  let newObject = {};
  
  for (let key in object) {
   
    let  newKey = object[key];
    let  newValue = key;
    let tempObject = {[newKey]: newValue};
    //let newObject = {newKey: key} this is what I had originally
    //
    
    newObject = Object.assign(newObject,tempObject);
    
    // I could also have had it like this with out the temporary varibles
    // but I felt this was harder to read
    //newObject = Object.assign(newObject,{[object[key]]: key});
  
   }
  
  return newObject;
  
  }

/*
  This function reveives an array of objects. It should return a single object, which is a combination of all the objects in the array.
*/

function addAll(array){

  //using .forEach go through the array and for each //object use Object.assign to add it to the new object.
  
  let newObject = {};
  
  array.forEach(function (keyValuePair) {
    newObject = Object.assign(newObject,keyValuePair);
  });
  return newObject;
  
  }
  
  

// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. It receives an object and a matcher function. It should test each value in the object against the matcher function and if a matching value is found, the value should be returned. Otherwise, return null.
*/
function find(obj, matcherFunc) {}

/*
  This function allows you to test whether every value in an object matches a certain criteria. For example, is every value greater than 100? The function receives an object and a tester function. If all values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function every(obj, func) {}

/*
  This function allows you to test whether some values in an object match a certain criteria. For example, are at least some of the values greater than 100? The function receives an object and a tester function. If at least 1 of the values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function some(obj, func) {}

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;
