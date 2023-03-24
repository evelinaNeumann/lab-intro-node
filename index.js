class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
/*This implementation first adds the new item to the end of the list using the push method. 
//Then, it sorts the list using a compare function that sorts elements in ascending order. 
//Finally, it updates the length of the list to reflect the new number of elements.*/
  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=> a-b);
    this.length = this.items.length;
  }
/*This implementation first checks if the requested position is within the bounds of the list. 
//If the position is out of bounds, it throws an OutOfBounds exception. Otherwise, it returns the 
//element at the requested position.*/
  get(pos) {
    if (pos >= this.items.length || pos < 0) throw new Error("OutOfBounds");
    return this.items[pos];
  }
/*This implementation first checks if the list is empty and throws an EmptySortedList exception 
//if that's the case. Otherwise, it initializes maxNum to the last element in the sorted list 
//(which is the maximum element since the list is sorted in ascending order). Finally, it returns maxNum.*/
  max() {
    if (this.items.length === 0) throw new Error("EmptySortedList");
    let maxNum = 0;
    this.items.forEach((item) => (item > maxNum ? (maxNum = item) : ""));
    return maxNum;
  }
/*This implementation first checks if the list is empty and throws an EmptySortedList 
//exception if that's the case. Otherwise, it initializes the minimum value to the first 
//element of the list and iterates over the remaining elements, updating the minimum value 
//if it finds a smaller one. Finally, it returns the minimum value.*/
  min() {
    if (this.items.length === 0) throw new Error("EmptySortedList");
    let minNum = this.items[0];
    this.items.forEach((item) => (item < minNum ? (minNum = item) : ""));
    return minNum;
  }
/*This implementation iterates over all elements in the list, adding each one to a running sum. 
//At the end, it returns the sum.
//Since the initial value of sum is zero and the forEach method will not execute the callback function
 //at all if the list is empty, this implementation automatically satisfies the second requirement, 
 //which is to return 0 for an empty sorted list.*/
  sum() {
    let sum = 0;
    this.items.forEach((item) => (sum += item));
    return sum;
  }
  /*This implementation first checks if the list is empty and throws an EmptySortedList exception 
  //if that's the case. Otherwise, it initializes a running sum to zero and iterates over all elements 
  //in the list, adding each one to the sum. Finally, it divides the sum by the length of the list 
  //to get the average and returns that value.*/

  avg() {
    if (this.items.length === 0) throw new Error("EmptySortedList");
    let sum = 0;
    this.items.forEach((item) => (sum += item));
    return sum / this.items.length;
  }
}

module.exports = SortedList;
