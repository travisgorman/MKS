## Algorithms Challenge
Given an array of integers, find the smallest positive difference between any two elements of the array.

```js
var findSmallestDifference = function(arr) {
  var sub = [];
  for ( var j = 0; j < arr.length; j++) {
    for ( var i = j + 1; i < arr.length; i++) {
      if ( arr[j] > arr[i]) {
        sub.push( arr[j] - arr[i]);
      } else {
        sub.push( arr[i] - arr[j]);
      } 
    } 
  }
sub.sort( (a, b) => a - b );
  return sub[0];
};  
```


#### My Solution, Pseudocode, and Notes on Algorithms Challenge

* Initialize an empty array, `sub`
* Compare each element in `arr` with every other element in `arr`
* Get all positive results and push them to `sub`
  - with a nested loop, on every item, we are looping then every other item and comparing the two 
  - if the value on the left is bigger - the difference is positive - 
  - subtract the value on the right from it, and push that value to `sub`
  - if not, the value is negative, so switch the subtraction order
  - This way we are able to subtract every number from every other number that could possibly give a positive value, leaving us an array of all the differences. 

* Sort `sub` in ascending order
* Return `sub[0]`, the smallest value
