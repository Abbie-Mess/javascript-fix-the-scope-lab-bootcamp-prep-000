function celebrityName(firstName){
  var nameIntro = "This celebrity is ";
  function lastName(theLastNam){
    return nameIntro + firstName + " " + theLastNam;
  }
  return lastName()
}

var mrName = celebrityName("Andy")
console.log(mrName)

mrName = ("Hoopers")
console.log(mrName)
console.log(celebrityName)