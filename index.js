function shout(arg) {
  return arg.toUpperCase();
}

function whisper(arg) {
  return arg.toLowerCase();
}

function logShout(arg) {
  console.log(shout(arg));
}


function logWhisper(arg) {
  console.log(whisper(arg));
}

function sayHiToGrandma(arg) {
  if ( whisper(arg) == arg ) {
    return "I can't hear you!";
  } else if ( shout(arg) == arg ){
    return "YES INDEED!";
  } else if ( arg == "I love you, Grandma." ) {
    return "I love you, too.";
  } else {
    return ;
  }
}
