// https://leetcode.com/problems/maximum-odd-binary-number/?envType=daily-question&envId=2024-03-01
// Daily Q 3/1/24

/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    const ones = '1' , zeroes = '0'
    let onesCount = 0
    for (num of s){
        if (num == 1){onesCount++}
    }
    return ones.repeat(onesCount-1) + zeroes.repeat(s.length-onesCount) + "1"

};


// two pointer solution, left pointer at leftmost, right at rightmost
// if leftmost is 1, move on; if rightmost is 0 move on
// if not, then that pointer freezes and the other moves on until they're opposite
// then they swap
// finally they swap the last of the string and the last of the 1s to put a 1 at the end.

/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    // Create char array
         let arr = s.split('')
         let N = arr.length;
         
         // Initialize two pointers
         let left = 0;
         let right = N - 1;
 
         while (left <= right) {
             
             // Increment left if equals 1
             if (arr[left] == '1') {
                 left++;
             }
             // Decrement right if equals 0
             if (arr[right] == '0') {
                 right--;
             }
             // Swap if neither pointer can be iterated
             if (left <= right && arr[left] == '0' && arr[right] == '1') {
                 arr[left] = '1';
                 arr[right] = '0';
             }
         }
 
         // Swap rightmost 1 bit to the end
         arr[left - 1] = '0';
         arr[N - 1] = '1';
 
         return arr.join('');
     };
 


     
