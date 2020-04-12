import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { power, binarySearch } from '../../algo/number/power';


export default function Number() {
  return (
    <div className="number">
      <h2>Number</h2>

      <ul>
        <li>
          <details
            className="details"
            id="number-power"
            aria-expanded="false"
            aria-labelledby="label">
            <summary role="button" aria-controls="content">
              <span className="question">
                Question:&nbsp;
                <strong>Write a Power function</strong>
              </span>
            </summary>

            <div aria-hidden="true">
              <h3 className="title">Solution:</h3>
              {binarySearch([1,2,3,4,5], 2)}
              {/* {binarySearch([1,3,4,5,6,9], 3)} */}
              <SyntaxHighlighter
                language="javascript"
                style={docco}
              >
                {power.toString()}
              </SyntaxHighlighter>
            </div>
          </details>
        </li>
      </ul>

  </div>
  );
}
