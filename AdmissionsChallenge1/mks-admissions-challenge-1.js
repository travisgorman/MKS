function decryptA(message){
  return message.split(" ")
    .map( word => word.slice(-1))
      .join('');
}
