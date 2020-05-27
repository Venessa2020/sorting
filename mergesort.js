function split(wholeArray) {
  // [1, 2, 3, 4, 5]
  /* your code here to define the firstHalf and secondHalf arrays */
  let halfPoint = wholeArray.length / 2;
  if (halfPoint === 0) return wholeArray;
  if (Math.floor(halfPoint) !== halfPoint) {
    halfPoint = Math.floor(halfPoint);
  }

  const firstHalf = wholeArray.slice(0, halfPoint);
  const secondHalf = wholeArray.slice(halfPoint);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let res = [];

  let firstArr, secondArr;
  if (arr1.length >= arr2.length) {
    firstArr = arr1
    secondArr = arr2
  } else {
    firstArr = arr2
    secondArr = arr1
  }

  if (secondArr.length === 0) {
    return firstArr;
  }

  let head1 = firstArr[0];
  let head2 = secondArr[0];

  if (head1 < head2) {
    res.push(head1);
    firstArr.shift();
  } else {
    res.push(head2);
    secondArr.shift();
  }

  return [ ...res, ...merge(firstArr, secondArr) ]
}


