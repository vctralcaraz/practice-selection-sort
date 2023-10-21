

function selectionSort(arr) {

  // Copy the original array
  const newArr = arr.slice();

  // Create an array to store the sorted values
  let sorted = [];

  // While the array is not empty...
  while(newArr.length > 0) {
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let min = newArr[0];
    let minIndex = 0;

    for(let i = 0; i < newArr.length; i++) {
      let el = newArr[i];
      if(el < min) {
        min = el;
        minIndex = i;
      }
    }

    // Save and remove the value at the min index
    let tmp = newArr.splice(minIndex, 1)[0];

    // Add the min value to the end of the sorted array
    sorted.push(tmp);
  }

  return sorted;
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0;

  // Repeat while the unsorted half is not empty:
  while(divider < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let min = arr[divider];
    let minIndex = divider;

    for(let i = divider + 1; i < arr.length; i++) {
      let el = arr[i];

      if(el < min) {
        min = el;
        minIndex = i;
      }
    }

    // Save the min value
    // already saved above...

    // Shift every unsorted value to the left of the min value to the right by 1
    for(let i = minIndex; i >= divider; i--) {
      arr[i] = arr[i - 1];
    }

    // Put the min value at the divider
    arr[divider] = min;

    // Increment the divider and repeat
    divider++;
  }

  return arr;
}


module.exports = [selectionSort, selectionSortInPlace];
