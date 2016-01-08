# Admissions Challenge 1

Here are both of my solutions to Decrypt A & B without any notes or clutter. I'll go into each step by step below, but these are my official answers right here

## PHASE 1
#### `DecryptA()`
Returns a word made out of the last letters of every word passed in as the `message` string

```js
function decryptA(message){
  return message.split(" ")
    .map( word => word.slice(-1))
      .join('');
}
```

## PHASE 2
#### `DecryptB()`
Compares the first and last letters of each word in `message` and builds a new word from the greater of the two. 

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

___

___

