/* 
  Given 
    - a 2d array representing a social space as a grid
      Each grid space either has a string representing a person's name,
      or null if there is no person there
    - a point object {x: int, y: int} indicating where "patient zero" is in the grid
  return an array of all the names of the people who will be infected by being too close
  There will be exactly one grid space with the value "patient zero" that
  represents someone infected.
  Anyone who is not practicing social distancing will become infected.
  Anyone who is standing next to someone whom is infected will become infected
  Standing next to someone means there is someone in the grid space immediately
  above, below, left, or right. Infection cannot directly spread diagonally.
  Find everyone who will be infected by "patient zero",
  and everyone who will be infected by those infected by patient zero.
*/
const socialSpaceGrid = [
    ["Jon2",     "Jane2",     null,       null],
    [null,       "Jon1",      "Jane1",    null],
    ["Jane4", "patient zero",   null,   "Jon3"],
    ["Jon4",       null,      "Jane3",    null]
];
// expected output: ["Jane4", "Jon4", "Jon1", "Jane1", "Jane2", "Jon2"] (order does not matter)

function find_infected(grid){
    // Find patient zero's location
    let patient_zero_node = {};
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "patient zero"){
                patient_zero_node = {y:i,x:j};
            }
        }
    }

    let answer = [];
    // call helper on patient_zero's node after checking bound
    answer = helper(grid, patient_zero_node);

    return answer;
}

// helper function: recursively finds infected patients
function helper(grid, node, patients_found = [], checked_nodes={}){
    // add to checked nodes
    checked_nodes[JSON.stringify(node)] = "seen";
    // DEBUGGING: console.log(checked_nodes);

    // if current node is null, we're done recursing
    if (grid[node.y][node.x] === null){
        return patients_found;
    }
    // else, unless it's patient_zero, add current node and keep going
    if(grid[node.y][node.x] !== "patient zero"){
        patients_found.push(grid[node.y][node.x]);
    }
    
    // if left is in bound AND it hasn't been checked yet, recurse
    let left = {y:node.y,x:node.x-1};
    if (left.x >= 0 && JSON.stringify(left) in checked_nodes === false){
        patients_found.concat(helper(grid,left,patients_found,checked_nodes));
    }
    
    // if right is in bound AND it hasn't been checked yet, recurse
    let right = {y:node.y,x:node.x+1};
    if (right.x < grid[right.y].length && JSON.stringify(right) in checked_nodes === false){
        patients_found.concat(helper(grid,right,patients_found,checked_nodes));
    }

    // if up is in bound AND it hasn't been checked yet, recurse
    let up = {y:node.y-1,x:node.x};
    if (up.y >= 0 && JSON.stringify(up) in checked_nodes === false){
        patients_found.concat(helper(grid,up,patients_found,checked_nodes));
    }
    // if down is in bound AND it hasn't been checked yet, recurse
    let down = {y:node.y+1,x:node.x};
    if (down.y < grid.length && JSON.stringify(down) in checked_nodes === false){
        patients_found.concat(helper(grid,down,patients_found,checked_nodes));
    }
    
    return patients_found;
}

console.log(find_infected(socialSpaceGrid));