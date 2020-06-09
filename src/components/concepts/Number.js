import React from 'react';
import Details from './../Details';
import { power } from '../../algorithms/number/power';
import { swap, swapUseTemp } from '../../algorithms/number/swap';

export default function Number() {
  return (
    <div className="number">
      <h2>Number</h2>

      <ul id="number">
        <li>
          <Details
            id="number-power"
            question="Write a power function"
            code={power.toString()}
          />

          <Details
            id="number-swap"
            question="Swap: 2 variables"
            time="O(1)"
            code={swap.toString()}
            secondCode={swapUseTemp.toString()}
          />
        </li>
      </ul>
  </div>
  );
}
