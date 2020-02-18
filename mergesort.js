function split(wholeArray) {
  if (wholeArray.length<=1) {
    return wholeArray
  }
  else {
    let splitNum = 0
    if (wholeArray.length%2===0) splitNum=wholeArray.length/2
    else splitNum = (wholeArray.length-1)/2
    const firstHalf = wholeArray.splice(0,splitNum)
    const secondHalf = wholeArray
    return [firstHalf, secondHalf]
  }
}

function merge(arrOne, arrTwo) {
  let combined = []
  let valOne = 0
  let valTwo = 0
  if (!arrOne.length || !arrTwo.length) {return 'one of your arrays is empty!'}
  while (combined.length<arrOne.length+arrTwo.length) {
    if (arrOne[valOne] < arrTwo[valTwo]) {
      combined.push(arrOne[valOne])
      valOne++
    }
    else {
      combined.push(arrTwo[valTwo])
      valTwo++
    }
  }
  return combined
}

function mergeSort(array) {


}
