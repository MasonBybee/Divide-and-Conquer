function findFloor(arr, x) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let floorValue = -1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (arr[middleIdx] === x) {
      return arr[middleIdx];
    } else if (arr[middleIdx] < x) {
      floorValue = arr[middleIdx];
      leftIdx = middleIdx + 1;
    } else {
      rightIdx = middleIdx - 1;
    }
  }

  return floorValue;
}

module.exports = findFloor;
