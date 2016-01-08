### Admissions Challenge Solutions, Pseudocode and Notes


#### My Solution to Phase 1 - Passing Notes In Class

```js
function decryptA(message){
  return message.split(" ")
    .map( word => word.slice(-1))
      .join('');
}
```

`DecryptA()` is a function that decodes a message based on a specific pattern.   

An unintelligible mess of word-salad is passed in as a string, and `DecryptA()` returns the secret message by creating a new word made out of the *last letter of every word* in the string.  

For Example, `decryptA("laugh ride lol hall bozo");` would return "hello"  

* Separate the words so they can be dealt with individually.  
* split string into array with `split()`
* The criteria applies evenly to all words - just get the last letter. 
 
My `decryptA()` solution is a chain of 4 function calls. 

Heres some pseudocode for the progression

```js
return message 
  .split 
    .map( .slice ) 
      .join;
```
Right away its obvious that the string needs to be an array. From there there are a number of different ways to get that last letter. You all are loud and clear about your love of higher-order functions, and so I have gone ahead and cultivated a love for them as well, as you see them featured in all my solutions. 

A string goes in one end, and the decrypted message comes out the answer comes out the other. 
In between, the string passed in as an argument undergoes the following transformations.  

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
