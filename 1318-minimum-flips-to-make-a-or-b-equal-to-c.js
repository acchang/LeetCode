// https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/description/

// skip for now, skip learning bitwise
// solution converts to bitwise with `&` operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND
// https://www.w3schools.com/js/js_bitwise.asp
// '&' returns every position where both have a `1`
// `|` sets each bit to 1 if one of two bits is 1
// `>>` Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
  let flips = 0;
  while (a > 0 || b > 0 || c > 0) {
    const bitA = a & 1; // Get the least significant bit of a
    const bitB = b & 1; // Get the least significant bit of b
    const bitC = c & 1; // Get the least significant bit of c
    if ((bitA | bitB) !== bitC) {
      if (bitC === 1) {
        // If bitC is 1 and (bitA | bitB) is not 1, we need to flip at least one bit
        if (bitA === 0 && bitB === 0) {
          flips += 1; // Flip one of the bits in a or b from 0 to 1
        }
      } else {
        // If bitC is 0 and (bitA | bitB) is not 0, we need to flip both bits
        if (bitA === 1) {
          flips += 1; // Flip the bit in a from 1 to 0
        }
        if (bitB === 1) {
          flips += 1; // Flip the bit in b from 1 to 0
        }
      }
    }
    // Shift a, b, and c to the right by 1 to process the next least significant bit
    a >>= 1;
    b >>= 1;
    c >>= 1;
  }
  return flips;
};