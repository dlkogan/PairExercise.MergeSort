function split(wholeArray) {
  if (wholeArray.length<=1) {
    return wholeArray
  }
  else {
    let splitNum = 0
    if (wholeArray.length%2===0) splitNum=wholeArray.length/2
    else splitNum = (wholeArray.length-1)/2
    const firstHalf = wholeArray.slice(0,splitNum)
    const secondHalf = wholeArray.slice(splitNum)
    return [firstHalf, secondHalf]
  }
}

function merge(arrOne, arrTwo) {
  let combined = []
  let valOne = 0
  let valTwo = 0
  if (!arrOne.length || !arrTwo.length) {return 'one of your arrays is empty!'}
  while (combined.length<(arrOne.length+arrTwo.length)) {
    if(!arrOne[valOne] || !arrTwo[valTwo]) {
      arrOne[valOne] ? combined.push(arrOne[valOne]) : combined.push(arrTwo[valTwo])
    } else {
      if (arrOne[valOne] < arrTwo[valTwo]) {
        combined.push(arrOne[valOne])
        valOne++
      }
      else {
        combined.push(arrTwo[valTwo])
        valTwo++
      }

    }
  }
  return combined
}

function mergeSort(array) {
  //FIRST RUN ARRAY RECURSIVELY THROUGH SPLIT until split into arrays of 1
  //We pass in an array, IF that has two subarrays w/ a length of 1...Merge these
  //OTHERWISE run a forEach loop on array elements w/ split running on each
  if (array.length <= 1) {
    return array;
  }
  else {
    const mySplit = split(array);
    return merge(mergeSort(mySplit[0]),mergeSort(mySplit[1]))
  }
  //outputArray to Merge...
  //Then run it through merge until the length of combined arrays equals inputArray

}
