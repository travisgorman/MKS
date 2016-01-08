## Admissions Challenge 1.2
#### My Solution, Pseudocode and Notes on Admissions Challenge 1.2 decryptB()


```js
function decryptB(message){ 
  var password = "",
  words = message.split(' ');
  words.forEach( word => {
    var first = word.charAt(0),
      last = word.charAt( word.length -1);
        password += (( first > last ) ? first : last )
  });
  return password;  
} 
```
