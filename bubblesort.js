function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  return arr;
}

function bubbleSort(array) {
  let swapped = true;
  let len = array.length;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (array[i] > array[i + 1]) {
        array = swap(array, i, i + 1);
        swapped = true;
      }
    }
  }
  return array;
}
