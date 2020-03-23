// Gaku Aldo & Faisal

// 1. findObjects
// Given a 'search for' object whose values will only be primitives (ints, strings, bools)
// and a list of objects, return any object that has the same key value pairs as the 'search for' object

// given both of these
const searchFor = {firstName: "Bob",age: 31};
const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

function findObjects(searchFor, items) {
    var user = [];
    for (var i = 0; i < items.length; i++) {
      // check that every key/value in searchFor matches items[i]
        let noMatch = false;
        for (key in searchFor) {
            if (searchFor[key] !== items[i][key]) {
                noMatch = true;
            }
        }
        // no mistakes found
        if (noMatch == false) {
            user.push(items[i]);
        }
    }
    return user;
}
console.log(findObjects(searchFor, items));

// --------------------------------------------------------------------------------------------------------------

// 2. findByIdAndUpdate

/* 
    Given an id, an object that has keys with corresponding updated values, and an array of objects
    Find the object by "id" key that matches the given id value and then update that object's
    keys with the provided new values.
    Return the updated object, or null if no object was found
    Examples:
*/

const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];

function findByIdAndUpdate(id, props, students) {
    let answer = null;
    // for each student
    for (let idx = 0; idx < students.length; idx++) {
      // if id match
        if (students[idx].id === id) {
        // for each param to change, change
            for(key in props){
                students[idx][key] = props[key];
            }
            answer = students[idx];
        }
    }
    return answer;
}
console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));