function findRotationCount(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    if (arr[leftIdx] <= arr[rightIdx]) {
      return leftIdx;
    }

    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let nextIdx = (middleIdx + 1) % arr.length;
    let prevIdx = (middleIdx - 1 + arr.length) % arr.length;

    if (arr[middleIdx] <= arr[nextIdx] && arr[middleIdx] <= arr[prevIdx]) {
      return middleIdx;
    }

    if (arr[middleIdx] <= arr[rightIdx]) {
      rightIdx = middleIdx - 1;
    } else {
      leftIdx = middleIdx + 1;
    }
  }

  return -1;
}

module.exports = findRotationCount;
