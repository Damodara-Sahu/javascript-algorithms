import React from 'react';
import Details from '../Details';

import { BinarySearchTree } from '../../algorithms/tree/binary-search-tree';
import { invertTree } from '../../leetcode/tree/binary-tree/226-invert-binary-tree';

import { Trie } from '../../algorithms/trie/trie';

// todo move and error in name
import { SinlgyLinkedList } from '../../algorithms/linked-lists/singly-linked-list';


//
import { preorderTraversal } from '../../leetcode/tree/binary-search-tree/traversals/pre-order';

export default function Tree() {
  return (
    <div className="tree">
      <h2>Trees</h2>

      <ul id="binary-search-tree">
        <li>
          <Details
            id="binary-search-tree-operations"
            question="Binary Search Tree: .insert, .contains, height, lowest common ancestor"
            solution=""
            complexity={
              `
                Binary search trees provide logarithmic time for the common operations of lookup, insertion, and deletion in the average case,
                and linear time in the worst case.
                Why is this? Each of those basic operations requires us to find an item in the tree
                and because of the tree structure at each parent node we are branching left or right
                and effectively excluding half the size of the remaining tree.
                This makes the search proportional to the logarithm of the number of nodes in the tree,
                which creates logarithmic time for these operations in the average case.
              `
            }
            time="O(log(n)) in the average case, linear - in worst cases"
            space=""
            code={BinarySearchTree.toString()}
            // secondCode={Trie.toString()}
            secondCode={SinlgyLinkedList.toString()}
          />
        </li>

        <li>
          <Details
            id=""
            question="Pre-order traversal Binary Tree"

            time=""
            space=""
            code={preorderTraversal.toString()}
          />
        </li>

        <li>
          <Details
            id="invert-binary-tree"
            question="Invert Binary Tree: approach recursion"
            time="is O(n), since each node in the tree is visited only once"
            space="is O(h) because of recursion, O(h) function calls will be placed on the stack
            in the worst case, where h is the height of the tree"
            code={invertTree.toString()}
          />
        </li>
      </ul>

  </div>
  );
}
