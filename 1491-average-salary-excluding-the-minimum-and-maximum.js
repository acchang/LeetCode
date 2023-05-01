/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort( (a,b) => (a-b))
    salary.pop()
    salary.shift()
    return (salary.reduce((a,b) => a+b))/salary.length
};

// an alt that doesn't use sort but is not faster. Just finds the max and min in O(n), subtracts them and adds the rest

var average = function(salary) {
    let val=0;
    let max= -Infinity;
    let min= Infinity;
    for(let el of salary){
        val+=el;
    max<el?max=el:max=max;
    min>el?min=el:min=min
    }

 let ans= val-(max+min);
 ans= ans/(salary.length-2);
 return ans
};
