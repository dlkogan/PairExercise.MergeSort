let testArr = [2,7,4,9,5,1,3,8]
let testOdd = [2,7,4,9,5,1,3]

describe('Split Array function', function() {
  it('returns an empty array if passed an empty array', function () {
    expect(split([])).toEqual([])
  });
  it('is able to split an array into two halves', function() {
    expect(split(testArr)).toEqual([[2,7,4,9],[5,1,3,8]])
  });
  it('is able to split an ODD array into two halves', function () {
    expect(split(testOdd)).toEqual([[2,7,4],[9,5,1,3]])
  })
});
let arrOne = [1,4,8]
let arrTwo = [2,3,7,9]
describe('Merge function', function(){
  it ('returns an error message if one or both arrays are empty', function () {
    expect(merge([],[])).toEqual('one of your arrays is empty!')
  });
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1], [2])).toEqual([1,2])
  });
  it('is able to merge two arrays of different sizes where larger one is first', function() {
    expect(merge(arrTwo, arrOne)).toEqual([1,2,3,4,7,8,9])
  })
});
describe('MergeSort Array function', function() {
  it('works w/ the simplest example', function() {
    expect(mergeSort([2,1])).toEqual([1,2])
  })
  it('Take in an even array and sort it', function() {
    expect(mergeSort(testArr)).toEqual([1,2,3,4,5,7,8,9])
  })
});
