/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let sum = parseInt(a, 2) + parseInt(b, 2)
    return sum.toString(2)
};

// but above fails on very long numbers


// just use bigInt binary: https://www.youtube.com/watch?v=W1R4QkZubx8


var addBinary = function(a, b) {
    let sum = 0
    if (a.length < 53 && b.length <53){
        sum = parseInt(a, 2) + parseInt(b, 2)
        return sum.toString(2)
    } else {
        sum = BigInt("0b" + a) + BigInt("0b" + b)
        return sum.toString(2)
    }
};

/* https://www.youtube.com/watch?v=6JC7vvs-mJ0
0 + 0 = 0
1 + 0 = 1
1 + 1 = 10
*/


var addBinary = function(a, b) {
    let carry = 0
    let res = ""

    for (let i = a.length-1, j = b.length-1; i >=0 || j >=0; i--, j--){
        let sum = (Number(a[i]) || 0 ) + (Number(b[j]) || 0) + carry
        // converts to Number bc need to use 1 or 0 for addition, otherwise they are strings, if it does not exist, then it is a zero.
        res = (sum % 2) + res
        // res starts as string so adding is concatening.
        carry = sum > 1 ? 1 : 0
    }
    if (carry) res = '1' + res
    return res
};

/* 83%run, 60%mem

Concept of Binary Addition.

**Rememeber,
1+1=0 with carry 1
1+0=1 with carry 0
0+1=1 with carry 0
0+0=0 with carry 0
Imp:1+1=1 with carry 1 if previous carry was 1.
The carry gets added in next step(scanning from right to left).
**
*/