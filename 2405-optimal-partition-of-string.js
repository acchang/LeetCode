/**
 * @param {string} s
 * @return {number}
 */

// https://leetcode.com/problems/optimal-partition-of-string/submissions/927940762/
// pretty slow, runtime 22%; memory 46%

var partitionString = function(s) {
    let counter = 0
    let left = 0
    let right = 1
    while (right<s.length){
        if ( checkUnique(s.slice(left, right)) ){right++}
        if ( !checkUnique(s.slice(left, right))){
            counter++
            left = right -1
        }
}
return counter + 1
};

function checkUnique(str) { 
	const list = new Set(); 
	for (const character of str.split("")) { 
		list.add(character); 
	} 
	return str.length === list.size; 
}; 

// faster: only 37% runtime now, still 47% memory
// starts with a set of uniques, the moment the new character is in the uniques, make a new set and counter adds 1
// need to know set methods has and add better
// c has to go into the new set

var partitionString = function(s) {
    let set = new Set()
    let counter = 1
    for (c of s){
        if (!set.has(c)){set.add(c)} else {
            counter++
            set = new Set(c)
        }
}
return counter
};