let score = "";
let changed = Number(score);
/*
    "33" -> 33
    "33abc" -> NaN
    "" -> 0
    "Dushyant" -> NaN
    null -> 0
    undefined -> NaN
true -> 1; false -> 0
 */
console.log(typeof changed);
console.log(changed);


let isLoggedIn = undefined
let change = Boolean(isLoggedIn)
/*
    1 -> true; 0 -> false
    "" -> false;
    "dushyant" -> true
    null -> false
    undefined -> false
 */
console.log(typeof change);
console.log(change);
