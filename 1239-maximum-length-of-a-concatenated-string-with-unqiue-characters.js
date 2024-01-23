// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/description/?envType=daily-question&envId=2024-01-23
// https://www.youtube.com/watch?v=tVIum5tSlPQ

/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let maxLength = 0;
  
    function backtrack(start,string){
      if (string.length !== new Set([...string]).size) {
          console.log("end", string)
          return}
      maxLength = Math.max(maxLength, string.length)
      console.log("ML", maxLength)
      for (let i=start; i<arr.length; i++){
          console.log("BT", i+1, string+arr[i])
          backtrack(i+1, string+arr[i])
      }
    }
    backtrack(0,"")
    return maxLength  
  };


/*
starts O,A
Backtrack (1,AB)
if no match AB, return to nothing
    But then Backtrack (2, ??)
Backtrack (2, ABC)
Backtrack (3, ABCD)

say if you have four elements:  A   B   C   D
it will check
AB BC CD
AC BD
AD
So everything before it is already matched, say CA.
*/


/* visualizing how backtracking works:
starts with each in array as first and then proceeds to add, go back when it fails.

["cha","r","act","ers"]

start(BT 0 ""), same length

--> ML 0

start loop
--> BT 1 cha
also BT 2 r (bc 1+1, ""+arr[1] or r) / BT 3 act / BT 4 ers
holds the string constant at "" and adds each

from BT 1 cha, lengths compared
--> ML 3

continue adding from string at "" (cha+r)
--> BT 2 char
start loop again holding string constant at "cha" + adding each
also BT 3 cha+act; BT4 cha+ers

char is longest
---> ML 4

continue adding from string at "" (char+act)
--> BT 3 char+act
start loop again holding string constant at "cha" + adding each
also BT 4 char+ers

"charact" repeats so
--> end charact

There is no BT or "characters" so loop ends, go back and examine last BT
--> BT 4 charers
looks at "charer" and there is a repeat
--> end charers

go backwards once more
--> BT 3 chaact
repeats so
--> end chaact

go backwards once more so
--> BT 4 chaers
ML 6

Now back at very first loop so
--> BT 2 r
"charers" still longest
--> ML 6

Making"r" the base and procedes to adding 
--> BT 3 ract
--> ML 6
--> BT 4 racters
--> end racters
--> BT 4 rers
--> end rers

--> BT 3 act
--> ML 6
--> BT 4 acters
--> ML 6

--> BT 4 ers
--> ML 6

*/