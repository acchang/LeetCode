// https://leetcode.com/problems/bag-of-tokens/description/?envType=daily-question&envId=2024-03-04
// Daily Q 3/4/24

/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    
};

/*
Algorithm
Initializations:
Initialize a pointer low to 0 and high to tokens.length - 1. low points to the first index of tokens and high points the the last index of tokens.
Initialize a variable score to 0.
Sort tokens in ascending order.
While low is less than or equal to high:
If power is greater than or equal to tokens[low], we have enough power to play a token face-up. We increment score by 1, reduce power by tokens[low], and increase low by 1.
Else if score is greater than 0, and low is less than high, we play a token face-down. We decrease score by 1, increase our power by tokens[high], and decrease high by 1.
Otherwise, we don't have enough power to play a token face-up, and we either don't have enough score to play a token face-down or not enough tokens remain to make it worth playing a token face-down, so we return score.
We have played all the tokens, so we return score.

