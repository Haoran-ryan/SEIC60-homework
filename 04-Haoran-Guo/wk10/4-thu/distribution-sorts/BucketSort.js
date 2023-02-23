function bucketSort(items) {
  // get the number of buckets
  const bin = Math.floor(Math.sqrt(items.length));
  const maxVal = Math.max(...items);
  const minVal = Math.min(...items);

  // create buckets
  const buckets = [];
  for (let i = 0; i < bin; i++) {
    buckets.push([]);
  }

  items.forEach((item) => {
    const bucketIndex = Math.floor((item - minVal) / (maxVal - minVal) * bin);
    buckets[bucketIndex].push(item);
  })
    
  // sort the buckets
  buckets.forEach((bucket) => {
    bucket.sort();
  });
  return buckets.flat();
}

module.exports = bucketSort;
