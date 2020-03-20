/*
Problem #1: Find non-consecutive ints and return an array of objs
nums = [1,2,3,4,6,7,8,10]
Output: [
{i: 4, n:6},
{i: 7, n:10}
]
where i = index, n = number
*/

function allNonConsecutive(nums) {
    let answer = [];

    // IF empty array
    if (nums.length === 0) {
        return answer;
    }

    for (let i = 0; i < nums.length; i++) {
        // if NON consecutive
        //  (current val - 1 != val of index to the left) OR index is NOT 0
        if (nums[i] - 1 != nums[i - 1] && i !== 0) {
            answer.push({ i, n: nums[i] });
        }
        // else skip
    }
    return answer;
}

console.log("Testing Problem #1")
nums = [1, 2, 3, 4, 6, 7, 8, 10]
console.log(allNonConsecutive(nums))


// ------------------------------------------------------------------------------------------
/* 
Problem #2:
Given an array of person objects with the following keys:
    firstName[string]
    lastName[string]
    friends[arr of friend objects]
    isSocialDistancing[bool]
    Friend object keys:
      firstName[string]
      lastName[string]
      isSocialDistancing[bool]
      isInfected[bool]

    return a new array of the names of people who are at high risk of infection
    A person is at high risk of catching the virus if they are:
    1. not practicing social distancing
    2. have a friend who is not practicing social distancing whom is infected
*/

const friend1 = {firstName: "Ryan",lastName: "McPoyle",isSocialDistancing: false,isInfected: true};
const friend2 = {firstName:  "Guy",lastName: "Chap-man",isSocialDistancing: false,isInfected: true};
const friend3 = {firstName: "Caiyyytleighn",lastName: "Khaitlyn",isSocialDistancing: false,isInfected: false};

// Input:
const people = [
    {firstName: "Joe",lastName: "Shmo",isSocialDistancing: false,friends: [friend2, friend3]},
    {firstName: "Frank",lastName: "Reynolds",isSocialDistancing: true,friends: [friend2, friend1]},
    {firstName: "Jane",lastName: "Pleighn",isSocialDistancing: false,friends: [friend2, friend1]}
];
// Output: ["Jane, Pleighn"]

// My own solution.
// Instead of using .includes, would be faster to add and break out of j loop!
function getAtRiskPeople(persons){
    let answer = [];
    if (persons.length===0){return answer;}
    for (let i = 0; i < persons.length; i++) {
        let person = persons[i];
        // Condition 1: Not practicing social distancing
        if (!person.isSocialDistancing){
            for (let j = 0; j < person.friends.length; j++) {
                let friend = person.friends[j];
                // Condition 2: Friend is infected and not practicing social distancing
                if (friend.isInfected && !friend.isSocialDistancing){
                    let nameStr = person.firstName + " " + person.lastName;
                    if (!answer.includes(nameStr)){
                        answer.push(person.firstName + " " + person.lastName);
                    }
                }
            }
        }
    }
    return answer;
}

// Posted solution
function getAtRiskPeopleSolution(persons) {
    const highRiskNames = [];

    for (const person of persons) {
        if (person.isSocialDistancing === false) {
            for (const friend of person.friends) {
                if (friend.isSocialDistancing === false && friend.isInfected === true) {
                    highRiskNames.push(`${person.firstName}, ${person.lastName}`);
                    break;
                }
            }
        }
    }
    return highRiskNames;
}

console.log("Testing Problem #2")
console.log("My solution:");
console.log(getAtRiskPeople(people));
console.log("Neil Solution:");
console.log(getAtRiskPeopleSolution(people));