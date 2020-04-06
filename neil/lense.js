/* 
  When receiving JSON data from an API call, it likely will have a deeply nested structure,
  depending on how much data was retrieved. 
  
  Often, the data you are after, is deeply nested.
  Once you've inspected the structure of the returned object,
  you have a known series of chained dots to access the desired value.
  
  However, some records don't have as much data as others,
  which means somewhere along your chain of dots, you will get undefined.
  If you blindly try to use the same chain of dots, hoping the data is there,
  you will run into an Uncaught TypeError: Cannot read property 'keyName' of undefined,
  resulting from essentially doing `undefined.keyName`.
  Write a function to safely access a nested value in an object
  without knowing how deeply nested the object is. There are js libs
  focused on providing functions to help with this problem. They are often
  referred to as 'lenses' because you use the lense to look into an object.

  Input:
    Object,
    Array of strings representing a path of keys in the Object

  Output:
    - Value from traversing the object to the last key
    - null if at any point accessing a key returns undefined
      - this means a key was not found / the Object was not nested as deep as the path of keys goes
    - the given object if array of keys is empty
*/

// Input:
const user = {
  id: 101,
  email: "jack@dev.com",
  personalInfo: {
    name: "Jack",
    address: {
      line1: "westwish st",
      line2: "washmasher",
      city: "wallas",
      state: "WX"
    }
  }
};

const keys1 = ["personalInfo", "address", "city"];
// Output: 'wallas'

const keys2 = ["personalInfo", "address", "country"];
// Output: null

const keys3 = ["personalInfo", "mainHobby", "yearsActive"];
// Output: null

const keys4 = ["address", "city"];
// Output: null

const keys5 = [];
// Output: the provided obj

function safeGet(obj, keys) {
  let val = obj;

  for (const currKey of keys) {
    if (val === undefined || val === null) {
      return null;
    }

    // go deeper into object, like runner = runner.next
    // except the key is not named "next" and the key is in a variable
    val = val[currKey];
  }

  // when the loop ends we might still have undefined
  // and our check in the loop won't catch it since loop ended
  if (val === undefined) {
    return null;
  }
  return val;
}

/* 
  same function but added ability to pass either array of key strings
  or a string as the key path:
    "personalInfo.address.city"
  
  Also works for bracket notation or a mix of both:
    "personalInfo[address].city"
*/
function lense(obj, keyPath) {
  const keys = splitKeyPath(keyPath);

  let val = obj;

  for (const currKey of keys) {
    if (val === undefined || val === null) {
      return null;
    }

    // go deeper into object, like runner = runner.next
    // except the key is not named "next" and the key is in a variable
    val = val[currKey];
  }

  // when the loop ends we might still have undefined
  // and our check in the loop won't catch it since loop ended
  if (val === undefined) {
    return null;
  }
  return val;
}

function splitKeyPath(path) {
  if (Array.isArray(path)) {
    return path;
  }

  if (typeof path === "string") {
    // regex to split into array based on brackets or period as separator / delimiter
    // .filter(Boolean) will return any empty string elements that are sometimes
    // present in the array .split returns
    return path.split(/[\\\[\\\].]/).filter(Boolean);
  }
  // if the type isn't either string or array so loop ran on the return
  // of this function won't break
  return [];
}

// Not intended for student consumption, call poison control immediately in case of accidental consumption
function lenseExe(obj, keyPath, ...args) {
  const method = lense(obj, keyPath);

  if (typeof method === "function") {
    // this is undefined if calling the method without .call
    const ret = method.call(obj, ...args);
    return ret;
  }

  return null;

  // return typeof method === "function" ? method.call(obj, ...args) : null;
}

module.exports = { lense, lenseExe };
