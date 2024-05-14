function sortedFrequency(arr, searchVal) {
  function findFirst(arr, searchVal) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx) {
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      if (
        arr[middleIdx] === searchVal &&
        (middleIdx === 0 || arr[middleIdx - 1] !== searchVal)
      ) {
        return middleIdx;
      } else if (arr[middleIdx] >= searchVal) {
        rightIdx = middleIdx - 1;
      } else {
        leftIdx = middleIdx + 1;
      }
    }
    return -1;
  }

  function findLast(arr, searchVal) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx) {
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      if (
        arr[middleIdx] === searchVal &&
        (middleIdx === arr.length - 1 || arr[middleIdx + 1] !== searchVal)
      ) {
        return middleIdx;
      } else if (arr[middleIdx] > searchVal) {
        rightIdx = middleIdx - 1;
      } else {
        leftIdx = middleIdx + 1;
      }
    }
    return -1;
  }

  const firstIdx = findFirst(arr, searchVal);
  const lastIdx = findLast(arr, searchVal);

  if (firstIdx === -1 || lastIdx === -1) {
    return -1;
  }
  return lastIdx - firstIdx + 1;
}

module.exports = sortedFrequency;
