import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { mergeSortedArrays } from '../../algo/array/merge-sorted-arrays';

export default function ArrayAlgorithms() {
  return (
    <div className="sorting">
      <h2>Array</h2>

      <ul>
        <li>
          <details
            className="details"
            id="is-sorted"
            aria-expanded="false"
            aria-labelledby="label">
            <summary role="button" aria-controls="content">
              <span className="question">
                Question:&nbsp;
                <strong>merge two sorted arrays</strong>
              </span>
            </summary>

            <div aria-hidden="true">
              <h3 className="title">Solution:</h3>
              <div className="complexity">runtime is O(n)</div>
              <SyntaxHighlighter
                language="javascript"
                style={docco}
              >
                {mergeSortedArrays.toString()}
              </SyntaxHighlighter>
            </div>
          </details>
        </li>

      </ul>
  </div>
  );
}
