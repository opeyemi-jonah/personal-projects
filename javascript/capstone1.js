/** For this project you will be building a generic website that will seem to
  ask mundane questions to normal users, but you secretly are looking for
  a spy! Anyone visiting your website will be asked a series of questions,
  only the Spy will be able to give specific answers you expect. If all
  questions are answered correctly, you will post a secret message in console
  for the Spy to read!

Here are the four conditions you will check for the spy:




  */

 var fName = prompt(" What's you first name? ");
 var lName = prompt(" What's your last name? ");
 var age = prompt(" How old are you? ");
 var height = prompt(" What's your height? ");
 var pName = prompt("Name your pet:");
alert("Thank you")

 var pCond = null
 var nCond = null
 var aCond = null
  var hCond = null
 //The Spy has the same first letter of her First Name and Last Name
if (fName[0]===lName[0]){
  nCond = true;

}
else{
nCond = false;
}

// The Spy is between the Age of 20 and 30 (exclusive of 20 and 30)
if (age > 20 && age < 30){
  aCond = true;
}
else{
  aCond = false;
}

// The Spy is at least 170 centimeters tall.
if (height > 169 ){
  hCond = true;
}
else{
  hCond = false;
}

//The Spy has a pet name that ends with the letter "y".
if (pName[pName.length-1] === 'y'){
  pCond = true;

}
else {
  pCond = false;
}


if (pCond && nCond && aCond && hCond){
  console.log("Welcome Agent, Pls meet with Harvey to get gadgets upgraded");
}
else {
  console.log("Goodbye, nothing here interest you");
}
