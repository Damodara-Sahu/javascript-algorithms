/*
  Leetcode
  268 Missing Number
  easy

  Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

  Example 1:

  Input: [3,0,1]
  Output: 2

  Example 2:

  Input: [9,6,4,2,3,5,7,0,1]
  Output: 8

  Note:
  Your algorithm should run in linear runtime complexity.
  Could you implement it using only constant extra space complexity?
*/

/*
  Approach

  An arithmetic progression is a sequence of numbers such that the difference
  of any two successive members is a constant.
  For example, the sequence 1, 2, 3, 4, ... is an arithmetic progression with common difference 1
*/

/*
  Approach 1: Sorting

  If nums were in order, it would be easy to see which number is missing.

  First, we sort nums. Then, we check the two special cases that can be handled in constant time -
  ensuring that 0 is at the beginning and that n is at the end.
  Given that those assumptions hold, the missing number must somewhere
  between (but not including) 0 and n.
  To find it, we ensure that the number we expect to be at each index is indeed there.
  Because we handled the edge cases, this is simply the previous number plus 1.
  Thus, as soon as we find an unexpected number, we can simply return the expected number.

  Complexity Analysis

Time complexity : \mathcal{O}(nlgn)O(nlgn)

The only elements of the algorithm that have asymptotically nonconstant time complexity are the main for loop (which runs in \mathcal{O}(n)O(n) time), and the sort invocation (which runs in \mathcal{O}(nlgn)O(nlgn) time for Python and Java). Therefore, the runtime is dominated by sort, and the entire runtime is \mathcal{O}(nlgn)O(nlgn).

Space complexity : \mathcal{O}(1)O(1) (or \mathcal{O}(n)O(n))

In the sample code, we sorted nums in place, allowing us to avoid allocating additional space. If modifying nums is forbidden, we can allocate an \mathcal{O}(n)O(n) size copy and sort that instead.

*/
var missingNumber = function(nums) {
  nums = nums.sort((a,b) => a - b);

  // ensure that n is at the last index
  if (nums[nums.length - 1] !== nums.length) {
    return nums.length;
  }
  // ensure that 0 is at the first index
  else if (nums[0] !== 0) {
    return 0
  }

  // if we get here, then the missing number is on the range (0, n)
  for (let i = 1; i < nums.length; i++) {
    let expectedNum = nums[i-1] + 1;
    if (nums[i] !== expectedNum) {
      return expectedNum;
    }
  }

  // array was not missing any numbers
  return -1;
};

/*
  Approach 4 Gauss' Formula

  One of the most well-known stories in mathematics is of a young Gauss,
  forced to find the sum of the first 100 natural numbers by a lazy teacher.
  Rather than add the numbers by hand, he deduced a closed-form expression for the sum,
  or so the story goes. You can see the formula below:
  S = n*(n+1)/2

  Algorithm

  We can compute the sum of nums in linear time, and by Gauss' formula,
  we can compute the sum of the first n natural numbers in constant time.
  Therefore, the number that is missing is simply the result of Gauss' formula
  minus the sum of nums, as nums consists of the first n natural numbers minus some number.

  Complexity Analysis
  Time complexity : O(n)
  Although Gauss' formula can be computed in O(1) time,
  summing nums costs us O(n) time, so the algorithm is overall linear.
  Because we have no information about which number is missing,
  an adversary could always design an input for which any algorithm that examines fewer than n numbers fails. Therefore, this solution is asymptotically optimal.

  Space complexity: O(1)
  This approach only pushes a few integers around, so it has constant memory usage.
*/

var missingNumberGauss = (nums) => {
  const len = nums.length;
  const expectedSum = len * (len + 1) / 2;

  let actualSum = 0;
  for (let i = 0; i < len; i++) {
    actualSum += nums[i]
  }

  return expectedSum - actualSum;
}

console.log('missing number', missingNumberGauss([3,0,1]))
console.log('missing number', missingNumber([1,3,4,0]))

export {
  missingNumber,
  missingNumberGauss
}
