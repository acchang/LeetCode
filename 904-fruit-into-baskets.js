/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let sectionStart = 0;
    const surveyed = new Map();
    let max = 0;

    for(let sectionEnd = 0; sectionEnd<fruits.length; sectionEnd ++){
        let rightChar = fruits[sectionEnd];
        if (!surveyed.get(rightChar)){surveyed.set(rightChar, 1)}
        else surveyed.set(rightChar, surveyed.get(rightChar)+1)

        while (surveyed.size > 2){
            let leftChar = fruits[sectionStart];
            if (surveyed.get(leftChar)>1) {surveyed.set(leftChar, surveyed.get(leftChar)-1)} else surveyed.delete(leftChar);
            sectionStart++;
        }
    
        max = Math.max(max, sectionEnd-sectionStart+1);
    };
    return max
};

// https://medium.com/theleanprogrammer/js-longest-substring-with-k-distinct-characters-sliding-window-technique-7585a0d34ee4
