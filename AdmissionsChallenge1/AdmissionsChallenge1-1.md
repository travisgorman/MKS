## Admissions Challenge 1.1
#### My Solution, Pseudocode and Notes on Admissions Challenge 1.1 `decryptA()`


```js
function decryptA(message){
  return message.split(" ")
    .map( word => word.slice(-1))
      .join('');
}

