The solution involves using `getItemLayout` and adjusting `windowSize` in the FlatList component.  `getItemLayout` allows for pre-calculation of item layouts, while `windowSize` controls the number of rendered items at once.  This significantly improves rendering performance.

```javascript
<FlatList
  data={largeDataset}
  renderItem={renderItem}
  keyExtractor={(item, index) => index.toString()}
  getItemLayout={(data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  })}
  windowSize={21} // Adjust as needed
/>
```

Here `ITEM_HEIGHT` is a constant representing the height of each item in the FlatList.  Adjust `windowSize` based on your data and performance needs.