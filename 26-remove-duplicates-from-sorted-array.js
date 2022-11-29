var removeDuplicates = function(nums) {
    let answer = []
    for (let i=0;i<nums.length;i++) {
        if (answer.includes(nums[i]) == false) {
            answer.push(nums[i]) }
    }
    console.log(answer)
        nums = answer
        return nums.length
    }

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