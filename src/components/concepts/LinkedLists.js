import React from 'react';
import Details from '../Details';

import { LinkedList } from '../../algorithms/linked-lists/singly/singly-linked-list';

export default function LinkedLists() {
  return (
    <div className="number">
      <h2>Linked Lists</h2>

      <h4>Singly-linked List</h4>
      <ul>
        <li>
          <Details
            id="singly-linked-list"
            question="Singly linked list implementation"
            code={LinkedList.toString()}
          />
        </li>
      </ul>

      {/* <h4>Doubly-linked List</h4>
      <ul>
        <li>
          ...
        </li>
      </ul>

      <h6>Problems</h6>
      <ul>
        <li>
          ...
        </li>
      </ul> */}
  </div>
  );
}
