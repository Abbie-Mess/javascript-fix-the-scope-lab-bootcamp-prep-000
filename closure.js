function celebrityName(firstName){
  var nameIntro = "This celebrity is ";
  function lastName(theLastName){
    return nameIntro + firstName + " " + theLastName;
  }
  return lastName()
}

var mrName = celebrityName("Andy")
console.log(mrName)

//mjName = ("Jackson")
//console.log(mjName)
//console.log(celebrityName)
