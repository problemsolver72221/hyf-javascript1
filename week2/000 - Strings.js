let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length);

/*Using global search expression to target all commas (/,/g),
then change them with spaces (' ') while assigning the values to a new variable:
*/

let myCleanString = myString.replace(/,/g, ' ');

//And now assigning new values to the good old myString variable:

myString = myCleanString;
console.log(myString);