/*
  Leetcode
  540 Single element in sorted array
  medium

  You are given a sorted array consisting of only integers where every element appears exactly twice,
  except for one element which appears exactly once.
  Find this single element that appears only once.

  Example 1:
  Input: nums = [1,1,2,3,3,4,4,8,8]
  Output: 2

  Example 2:
  Input: nums = [3,3,7,7,10,11,11]
  Output: 10

  Note: Your solution should run in O(log n) time and O(1) space.

  Constraints:
  1 <= nums.length <= 10^5
  0 <= nums[i] <= 10^5
*/


/*
  Approach Brute force

  Intuition

  We can use a linear search to check every element in the array
  until we find the single element.

  Algorithm
  Starting with the first element, we iterate over every 2nd element,
  checking whether or not the next element is the same as the current.
  If it's not, then we know this must be the single element.

  If we get as far as the last element, we know that it must be the single element.
  We need to treat it as a special case after the loop,
  because otherwise we'll be going over the end of the array.

  Complexity Analysis
  Time complexity : O(n). For linear search, we are looking at every element
  in the array once.

  Space complexity : O(1). We are only using constant extra space.

  While this approach will work, the question tells us we need a O(logn) solution.
  Therefore, this solution isn't good enough.
*/
var singleNonDuplicateBruteForce = function(nums) {
  for (let i = 0; i < nums.length - 1; i += 2) {
    if (nums[i] !== nums[i+1]) return nums[i]
  }
  return nums[nums.length - 1]
};


var singleNonDuplicateBruteForceVariant2 = function(nums) {
  for (let i = 1; i <= nums.length; i += 2) {
    if (nums[i] !== nums[i - 1]) return nums[i - 1];
  }
};

/*
  Approach binary search

  It makes sense to try and convert the linear search into a binary search.
  In order to use binary search, we need to be able to look at the middle item and
  then determine whether the solution is the middle item, or to the left, or to the right.
  The key observation to make is that the starting array must always have
  an odd number of elements (be odd-lengthed), because it has one element appearing once,
  and all the other elements appearing twice.

  An array with the elements 1, 1, 4, 4, 5, 5, 6, 6, 8, 9, 9

  Here is what happens when we remove a pair from the center.
  We are left with a left subarray and a right subarray.
  An array with the elements 1, 1, 4, 4, 5, 5, 6, 6, 8, 9, 9. The 5's are crossed out.
  left array: 1, 1, 4, 4
  right array: 6, 6, 8, 9, 9

  Like the original array, the subarray containing the single element must be odd-lengthed.
  The subarray not containing it must be even-lengthed.
  So by taking a pair out of the middle and then calculating which side is now odd-lengthed,
  we have the information needed for binary search.

  Algorithm
  We start by setting lo and hi to be the lowest and highest index (inclusive) of the array,
  and then iteratively halve the array until we find the single element
  or until there is only one element left.
  We know that if there is only one element in the search space,
  it must be the single element, so should terminate the search.

  On each loop iteration, we find mid, and determine the odd/ evenness of the sides
  and save it in a variable called halvesAreEven.
  By then looking at which half the middle element's partner is in
  (either last element in the left subarray or first element in the right subarray),
  we can decide which side is now (or remained) odd-lengthed
  and set lo and hi to cover the part of the array we now know the single element must be in.

  The trickiest part is ensuring we update lo and hi correctly based on the values of mid and halvesAreEven.
  These diagrams should help you understand the cases.
  When solving problems like this, it's often good to draw a diagram and think really carefully
  about it to avoid off-by-one errors. Avoid using a guess and check approach.

  Case 1: Mid’s partner is to the right, and the halves were originally even.
  The right side becomes odd-lengthed because we removed mid's partner from it.
  We need to set lo to mid + 2 so that the remaining array is the part above mid's partner.

  Case 2: Mid’s partner is to the right, and the halves were originally odd.
  The left side remains odd-lengthed. We need to set hi to mid - 1
  so that the remaining array is the part below mid.

  Case 3: Mid’s partner is to the left, and the halves were originally even.
  The left side becomes odd-lengthed because we removed mid's partner from it.
  We need to set hi to mid - 2 so that the remaining array is the part below mid's partner.

  Case 4: Mid’s partner is to the left, and the halves were originally odd.
  The right side remains odd-lengthed. We need to set lo to mid + 1
  so that the remaining array is the part above mid.

  Another interesting observation you might have made is that this algorithm
  will still work even if the array isn't fully sorted.
  As long as pairs are always grouped together in the array
  (for example, [10, 10, 4, 4, 7, 11, 11, 12, 12, 2, 2]),
  it doesn't matter what order they're in. Binary search worked for this problem
  because we knew the subarray with the single number is always odd-lengthed,
  not because the array was fully sorted numerically.
  We commonly call this an invariant, something that is always true
  (i.e. "The array containing the single element is always odd-lengthed").
  Be on the lookout for invariants like this when solving array problems,
  as binary search is very flexibile!

  Complexity Analysis
  Time complexity : O(log n). On each iteration of the loop,
  we're halving the number of items we still need to search.

  Space complexity : O(1)O(1). We are only using constant space to keep track of where we are in the search.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicateBinarySearch = function(nums) {
  const len = nums.length;
  let lowest = 0;
  let highest = len - 1; // last index

  while (lowest < highest) {
    let mid = Math.floor(lowest + (highest - lowest)/2);
    let halvesAreEven = (highest - mid) % 2 === 0;

    if (nums[mid + 1] === nums[mid]) {
      if (halvesAreEven) {
        lowest = mid + 2;
      } else {
        highest = mid - 1;
      }
    } else if ( nums[mid - 1] === nums[mid]) {
      if (halvesAreEven) {
        highest = mid - 2;
      } else {
        lowest = mid + 1;
      }
    } else return nums[mid];
  }

  return nums[lowest];
}
console.log('singleNonDuplicate', singleNonDuplicateBinarySearch([1,1,2,3,3]));
console.log('singleNonDuplicateBruteForce', singleNonDuplicateBinarySearch([1,1,2,3,3,4,4,8,8]));


export {
  singleNonDuplicateBruteForce, singleNonDuplicateBruteForceVariant2,
  singleNonDuplicateBinarySearch,
}
