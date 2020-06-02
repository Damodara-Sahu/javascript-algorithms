import React from 'react';
import Details from '../Details';

import { Stack } from '../../algorithms/stack-queue/stack/stack-using-string';
import { Stack as StackArr } from '../../algorithms/stack-queue/stack/stack-use-array';
import { StackObj } from '../../algorithms/stack-queue/stack/stack-using-objects';
import { Queue } from '../../algorithms/stack-queue/queue/queue-using-object';

import { MinStack, MinStackMinPairs } from '../../leetcode/stack/155-min-stack';
import { MaxStack } from '../../leetcode/stack/716-max-stack';

export default function StackQueue() {
  return (
    <div className="number">
      <h2>Stack and Queue</h2>

      <h3>Stack</h3>
      <ul>
        <li>
          <Details
            id="stack-use-array"
            question="Stack implementation using array as a storage"
            code={StackArr.toString()}
          />
        </li>
        <li>
          <Details
            id="stack-using-string"
            question="Stack implementation using string"
            code={Stack.toString()}
          />
        </li>
        <li>
          <Details
            id="stack-using-object"
            question="Stack implementation using object"
            code={StackObj.toString()}
          />
        </li>
      </ul>

      <h3>Queue</h3>
      <ul>
        <li>
          <Details
            id="queue-using-object"
            question="Queue implementation using object"
            code={Queue.toString()}
          />
        </li>
      </ul>

      <h6>Problems</h6>
      <ul>
        <li>
          <details
            className="details"
            id="stack-different-tasks"
            aria-expanded="false"
            aria-labelledby="label">
              <summary role="button" aria-controls="content">
                Different problems related to Stacks
              </summary>

              <Details
                id="min-stack"
                question="Min Stack: approach 2 Stacks, approach minimum pairs"
                time="O(1) for all operation"
                space="O(n)"
                code={MinStack.toString()}
                secondCode={MinStackMinPairs.toString()}
              />

              <Details
                id="max-stack"
                question="Max Stack: approach 2 Stacks"
                solution="Design a max stack that supports push, pop, top, peekMax and popMax."
                complexity={
                  `
                  Can we design operations in O(1) like the min stack problem? No
                  Because if it were, you could use this data structure to sort an array of numbers in O(n) time.
                  So, at the very least, either push(x) or popMax() must be O(log n)
                  `
                }
                time="O(N) for the popMax operation, and O(1) for the other operations"
                space="O(N), the maximum size of the stack."
                code={MaxStack.toString()}
                secondCode={MaxStack.toString()}
              />
          </details>
        </li>
      </ul>
  </div>
  );
}
