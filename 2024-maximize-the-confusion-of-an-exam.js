/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    let left = 0, charCount = 0, maxT = 0
    for (let right=0; right<answerKey.length; right++){
      if (answerKey[right] === "T"){charCount++}
      while (charCount > k){
        if(answerKey[left++] == "T"){charCount--}
      }
      if (right-left+1 > maxT){maxT=right-left+1}
    }
    
    left = 0, charCount = 0, maxF = 0
    for (let right=0; right<answerKey.length; right++){
      if (answerKey[right] === "F"){charCount++}
      while (charCount > k){
        if(answerKey[left++] == "F"){charCount--}
      }
      if (right-left+1 > maxF){maxF=right-left+1}
    }

  return Math.max(maxT, maxF)

};