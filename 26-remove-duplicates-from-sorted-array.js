var removeDuplicates = function(nums) {
    nums = nums.map((x,i) => x == nums[i+1] ? "A" : x).filter((x) => typeof x === "number")
    console.log(nums)
    return nums
};    





use splice:
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]){
            nums[i+1]+"x"
        }
    }
    console.log(nums)
    return nums;
};    


var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[++i] = nums[j];
    }
    return ++i;
};


// var removeDuplicates = function(nums) {
// // console.log(nums.filter((x) => nums.indexOf(x) === nums.lastIndexOf(x) ))
//     console.log(nums.map((x) => nums.indexOf(x) === nums.lastIndexOf(x)))
    
//     }

// var removeDuplicates = function(nums) {
//     let end = nums.length;
//     let remove = function(i) {
//         for( var j=i; j+1<end; j++ ) {
//             nums[j] = nums[j+1];
//         }
//     };
    
//     var i;
//     for( i=0; i<end; i++ ) {
//         while( i<end && nums.indexOf(nums[i]) < i ) {
//             remove(i);
//             end--;
//         }
//     }
    
//     return end;
// };


// var removeDuplicates = function(nums) {
//     let answer = []
//     for (let i=0;i<nums.length;i++) {
//         if (answer.includes(nums[i]) == false) {
//             answer.push(nums[i]) }
//     }
//     console.log(answer)
//         nums = answer
//         return nums.length
//     }

// var removeDuplicates = function(nums) {
//     let end = nums.length;
//     let remove = function(i) {
//         for( var j=i; j+1<end; j++ ) {
//             nums[j] = nums[j+1];
//         }
//     };
    
//     var i;
//     for( i=0; i<end; i++ ) {
//         while( i<end && nums.indexOf(nums[i]) < i ) {
//             remove(i);
//             end--;
//         }
//     }
    
//     return end;
// };