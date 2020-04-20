import React from 'react';

import Sorting from './concepts/Sorting';
import StringManipulation from './concepts/StringManipulation';
import CodeSandboxTasks from '../eloquent-tasks/CodeSandboxTasks';
import GreedyAlgorithms from './concepts/GreedyAlgorithms';
import Number from './concepts/Number';
import ArrayAlgorithms from './concepts/ArrayAlgorithms';
import Searching from './concepts/Searching';
import Tree from './concepts/Tree';

import './main.css';

function Main() {
  return (
    <div className="main">
      <div className="wrapper">
        <Number />
        <ArrayAlgorithms />
        <Sorting />
        <StringManipulation />
        <GreedyAlgorithms />
        <Searching />
        <Tree />
        <CodeSandboxTasks />
      </div>
  </div>
  );
}

export default Main;
