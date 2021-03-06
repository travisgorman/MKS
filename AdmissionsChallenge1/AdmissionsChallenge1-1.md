## Admissions Challenge 1.1
#### My Solution, Pseudocode and Notes on Admissions Challenge 1.1 `decryptA()`


```js
function decryptA(message){
  return message.split(" ")
    .map( word => word.slice(-1))
      .join('');
}

___

## PHASE 1
`DecryptA()` is a function that decrypt a message based on a specific pattern.  

An unintelligable mess of word-salad is passed in as a string, and `DecryptA()` returns the secret word. It does this by creating a new word made out of the last letter of every word in the string. 

For Example, `decryptA("laugh ride lol hall bozo");` would return "hello"

* Separate the words so they can be dealt with individually. 
* split string into array with `split()`
* The criteria applies evenly to all words - just get the last letter. 

### My decryptA solution 
is a chain of 4 function calls. 

```js
function decryptA(message){
  return message.split(" ")
    .map( word => word.slice(-1))
      .join('');
}
```
heres some pseudocode for the progression

```js
return message 
  .split 
    .map( .slice ) 
      .join;
```

a string goes in one end, the answer comes out the other. In between, the array undergoes the following transformations. 


```js
`decryptA("laugh ride lol hall bozo");`
```

1. "laugh ride lol hall bozo"
2. ["laugh", "ride", "lol", "hall", "bozo"]
3. ["h", "e", "l", "l", "o"]
4. "hello"

* `split()` the string into an array of substrings.
  - use whitespace `" "` as the separator argument.
  - return an array where each word is its own item.

*returns* -->
>>>["laugh", "ride", "lol", "hall", "bozo"]


* `map()` over the array, dealing with each word individually
  - Callback takes `word` as its item parameter


*  *Callback* On each word, call `slice()` to remove letters we don't need
    + A negative index means offset from the end of the array, so pass `-1` to return a copy where each item contains only the last letter of each word. 

*returns* -->
>>>["h", "e", "l", "l", "o"]

  
* `join()` the array to convert it back into a string.
  - At this point the returned value spells out the decrypted code word but its an array, and each letter is an individual string item. We need to turn it back into a single string. `join()` is perfect for this. pass in empty string as it's separator parameter.
  - 
  *returns* -->

*returns* -->
>>>"hello"

yay. It works. 

