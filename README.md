# React Native FlatList Performance Issue

This repository demonstrates a common performance problem in React Native's `FlatList` component when dealing with extensive datasets. The unoptimized `FlatList` renders slowly and may cause crashes.

The `FlatListBug.js` file shows the problematic code. The `FlatListBugSolution.js` demonstrates how to fix the performance issue using `getItemLayout` and `windowSize`.

## Solution

The solution involves implementing `getItemLayout` and adjusting `windowSize`. `getItemLayout` pre-calculates the layout for each item, significantly improving rendering speed. `windowSize` controls how many items are rendered at a time, further enhancing performance.