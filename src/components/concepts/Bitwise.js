import React from 'react';
import Details from '../Details';

// problems
import { flipBitByBit, findComplement } from '../../leetcode/bitwise/476-number-complement';
import { isPowerOfTwoIterative, isPowerOfTwoBitManipulation, isPowerOfTwo } from '../../leetcode/bitwise/231-power-of-two';
import { numOfSetBits } from '../../leetcode/bitwise/461-hamming-distance';
import { hammingWeightLoopFlip } from '../../leetcode/bitwise/191-number-of-bits';
import { testBit } from '../../algorithms/bitwise/common-bit-tasks';


export default function BitManipulation() {
  return (
    <div className="bit">
      <h2 id="bit">Bit Manipulation</h2>

      <ul id="bit">
        <li>
          <Details
            id="common-bit-tasks"
            question="Common bit tasks"
            solution="Tasks: testBit, "
            time=""
            space=""
            code={testBit.toString()}
            secondCode={hammingWeightLoopFlip.toString()}
          />
        </li>
        <li>
          <Details
            id="number-complement"
            question="Complement of Base 10 Integer"
            solution="The complement strategy is to flip the bits of its binary representation"
            time="O(1)"
            space="O(1)"
            code={flipBitByBit.toString()}
            secondCode={findComplement.toString()}
          />
        </li>
        <li>
          <Details
            id="bit-power-of-two"
            question="Power of two: Given an integer, write a function to determine if it is a power of two"
            solution="approach iterative, bit manipulation, math and use toString"
            complexity="for bit manipulation approach, time and space is O(1)"
            time="O(log n)"
            space="is O(1)"
            code={isPowerOfTwoIterative.toString()}
            secondCode={isPowerOfTwoBitManipulation.toString()}
            thirdSolution={isPowerOfTwo.toString()}
          />
        </li>

      </ul>

  </div>
  );
}
