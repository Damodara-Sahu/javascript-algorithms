/*
Leetcode
231 Power of two

Given an integer, write a function to determine if it is a power of two.

Example 1:
Input: 1
Output: true
Explanation: 20 = 1
Example 2:

Input: 16
Output: true
Explanation: 24 = 16
Example 3:

Input: 218
Output: false
*/

/*
Approach Math

Binary representation
2 -> 100
3 -> 11
4 -> 100
5 -> 101
6 -> 110
8 -> 1000
32 -> 100000

time is O(n)
space is O(1)

*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n <= 0) return false;

  n = n.toString(2);
  let count = 0;
  for (let i = 0; i < n.length; i++) {
    if (Number(n[i]) === 1) {
      count++;
    }
  }
  const isPowerOfTwo = (count <= 1) ? true : false;
  return isPowerOfTwo
};

/*
Approach iterative: Keep dividing by 2

check if n can be divided by 2.
If yes, divide n by 2 and check it repeatedly.

Time complexity = O(log n)
*/
var isPowerOfTwoIterative = function(n) {
  if (n <= 0) return false;
  while (n % 2 === 0) n /= 2;
  return n === 1;
};

/*
Approach iterative 2
*/
var isPowerOfTwoUseWhile = function(n) {
  let i = 1;
  while (i < n) i = i*2;
  return i === n;
};

/*
approach counting set bits

power of two always has 1 set  bit
which is the most significant bit
*/

/*
todo understand
Approach bit shift

How to use bit shift in order to find if its power of two.
we will keep shiftig unless we hit first set bit

if you remove all less significant bits then you value should be
equals to 1

how to find is bit equal to 1 -
you will take bitwise number & x (x=1)



*/
var isPowerOfTwoShiftBit = function(n) {
  if ( n === 0 ) return false;
  //debugger
  //while (n > 1 && (n&1) === 0) n >>= 1;
  while (n > 1 && (n & 1) === 0) {
    n >>= 1
  };

  console.log('isPowerOfTwoShiftBit', n === 1)
  return n === 1
};

// public class Solution {
//   public boolean isPowerOfTwo(int n) {
//       if(n < 1) return false;
//       if(n == 1) return true;
//       while((n & 1) != 1){
//           n >>= 1;
//       }
//       if(n > 1) return false;
//       else return true;
//   }
//}


isPowerOfTwoShiftBit(6);
// isPowerOfTwoIteratvie(2);
// isPowerOfTwoIteratvie(4);
// isPowerOfTwo(6);
// isPowerOfTwo(16);
isPowerOfTwo(-16);
// todo case with 0

// add a solution to a comment?

export {
  isPowerOfTwo,
  isPowerOfTwoIterative,
  isPowerOfTwoShiftBit
}
