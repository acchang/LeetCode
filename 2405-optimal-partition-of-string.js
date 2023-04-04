/**
 * @param {string} s
 * @return {number}
 */
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