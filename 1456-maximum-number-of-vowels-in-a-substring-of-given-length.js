/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let counter = 0
    let max = 0
    for (let i=0;i<s.length-k+1;i++){
        let chunk = s.slice(i,i+k)
        for (let j=0; j<chunk.length;j++){
            if (chunk[j]=='a' || chunk[j]=='e' || chunk[j]=='i' || chunk[j]=='o'|| chunk[j]=='u'){counter++}
        }
    if (counter>max){max = counter} 
    counter = 0
    }
    return max
};

// keep track of changes in the window to save on memory
