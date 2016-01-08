function decryptA(message){
  return message.split(" ")
    .map( word => word.slice(-1))
      .join('');
}

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
