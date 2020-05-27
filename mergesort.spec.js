describe('Split Array function', function () {
  it('is able to split an array into two halves', function () {
    // it('returns empty array when passed an empty array', function() {
    expect(split([])).toEqual([]);
    // })

    // it('returns two evenly split arrays when passed an array of even length', function() {
    expect(split([1, 2])).toEqual([[1], [2]]);
    // })

    expect(split([1, 2, 3, 4, 5])).toEqual([
      [1, 2],
      [3, 4, 5],
    ]);
  });
});

describe('Merge function', function () {
  it('is able to merge two sorted arrays into one sorted array', function () {
    // test the merging algorithm

    expect(merge([1, 3, 5], [2, 4])).toEqual([1, 2, 3, 4, 5]);
    expect(merge([37, 100], [1, 2, 200, 400])).toEqual([
      1,
      2,
      37,
      100,
      200,
      400,
    ]);
  });
});

describe('Merge Sort function', function () {
  beforeEach(function () {
    spyOn(window, 'split').and.callThrough();
    spyOn(window, 'merge').and.callThrough();
  });
  it(' will use merge and split functions to return a sorted array', function () {
    expect(mergeSort([1, 4, 52, 7])).toEqual([1, 4, 7, 52]);
    // expect(window.split.calls.count()).toEqual(3);
    //expect(window.merge.calls.count()).toEqual(3);
  });
});
