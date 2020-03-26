// Members: Eddy, Gaku, Faisal

/* 
  Given an array of objects representing people, and a string representing a bad habit
  return a "santasNaughtyList" containing the first and last names of all the people who
  have the matching bad habit so that santa knows how much coal he needs.
*/

const students = [
    {
        firstName: "FN1",
        lastName: "LN1",
        habits: ["doesn't wash dishes", "falls asleep in lecture", "shows up early"]
    },
    {
        firstName: "FN2",
        lastName: "LN2",
        habits: ["shows up late", "washes dishes", "helps peers"]
    },
    {
        firstName: "FN3",
        lastName: "LN3",
        habits: ["doesn't wash dishes", "hoards snacks", "shows up late"]
    },
    {
        firstName: "FN4",
        lastName: "LN4",
        habits: ["shows up early", "helps peers", "washes dishes"]
    }
];

// assume each student already has (firstName, lastName, habits)
// assume habit is already lower cased
function returnNaughtyList(students, inputHabit) {
    var naughtyList = [];

    // for each student
    for (var student of students) {
        // for each habit
        for (var habit of student.habits) {
            // if it matches "inputHabit"
            if (habit === inputHabit) {
                // push FULL name in to naughtyList
                var nameStr = student.firstName + " " + student.lastName;
                naughtyList.push(nameStr)
                break;
            }
        }
    }
    return naughtyList;
}

// assume each student already has (firstName, lastName, habits)
// assume habit is already lower cased
function returnNaughtyListFancy(students, inputHabit) {
    return students
        .filter((student) => {return student.habits.includes(inputHabit)})
        .map((student) => {return `${student.firstName} ${student.lastName}`})
}

console.log(returnNaughtyList(students, "doesn't wash dishes"));
console.log(returnNaughtyListFancy(students, "doesn't wash dishes"));
// Output: ["FN1 LN1", "FN3 LN3"]

// console.log(returnNaughtyList(students, "shows up late"));
// Output: ["FN2 LN2", "FN3 LN3"]

// console.log(returnNaughtyList(students, "vapes too much"));
  // Output: []
