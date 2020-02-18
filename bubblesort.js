function bubbleSort(arr) {
  if (!arr.length) return arr
  else {
    for (let i=0; i<arr.length; i++) {
      let temp = arr[i]
      if (temp<arr[i+1]) {temp = arr[i+1]}
      else {
        arr[i] = arr[i+1]
        arr[i+1] = temp
        temp = arr[i+1]}
    }
    // return [...bubbleSort(arr.slice(0, -1)), arr[arr.length-1]]
  }

}
