import React from 'react';
import Details from './../Details';
import { bubbleSort } from '../../algo/sorting/bubble-sort';
import { quickSort } from '../../algo/sorting/quick-sort';
import { selectionSort } from '../../algo/sorting/selection-sort';
import { findMedian } from '../../algo/sorting/tasks/find-median';

function Sorting() {
  return (
    <div className="sorting">
      <h2>Sorting</h2>

      <ul>
        <li>
          <Details
            id="bubble-sort"
            question="Bubble sort"
            solutionDesc="is a method for sorting arrays by comparing each array element to the element behind it"
            complexityDesc="Unfortunately bubble sort is pretty slow"
            runTime="O(n^2)"
            spaceComplexity="O(1)"
            code={bubbleSort.toString()}
          />
        </li>

        <li>
          <Details
            id="selection-sort"
            question="Selection sort"
            solutionDesc=""
            complexityDesc=""
            runTime="O(n^2) quadratic time complexity in all cases"
            spaceComplexity=""
            code={selectionSort.toString()}
          />
        </li>

        <li>
          <Details
            id="quick-sort"
            question="Quick sort"
            solutionDesc="first pick a random number - pivot"
            complexityDesc="Quick sort’s worst case is O(n^2) but that can be avoided if we pick random pivot point (choose middle one)"
            runTime="O(n log(n))"
            spaceComplexity="O(log (n))"
            code={quickSort.toString()}
          />
        </li>

        {/* other tasks */}
        <li>
          <Details
            id="find-median"
            question="Find a median"
            solutionDesc="The median of a list of numbers is essentially it's middle element after sorting. The same number of elements occur after it as before."
            runTime=""
            spaceComplexity=""
            code={findMedian.toString()}
          />
        </li>
      </ul>
  </div>
  );
}

export default Sorting;
