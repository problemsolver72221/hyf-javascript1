//15 - Write some code to test two arrays for equality using == and ===. Test the following:

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

x == y ? console.log("they are equal") : console.log("they are not equal!");
x === y ? console.log("they are equal") : console.log("they are not equal!");
z == y ? console.log("they are equal") : console.log("they are not equal!");
z == x ? console.log("they are equal") : console.log("they are not equal!");

//16 - Take a look at the following code: Does the order that you assign (o3 = o2 or o2 = o3) matter?

let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

o2.foo = "restaurant";
console.log("if you change o2, that will change o3");

console.log(o1);
console.log(o2);
console.log(o3);

o3.foo = "kanel"
console.log("if you change o3, that will change o2");

console.log(o1);
console.log(o2);
console.log(o3);

o1.foo ="mjölk"
console.log("if you change o1, that can never change neither o2 or o3");

console.log(o1);
console.log(o2);
console.log(o3);

//17 - What does the following code return? (And why?)
//let bar = 42;
//typeof typeof bar;

let bar = 42;
console.log (typeof typeof bar);

//this code returns a "string" value even though "bar" variable is a number.
//but there is one possibility may be the issue:

console.log (typeof bar);

//when I remove one "typeof", it shows the original type of element, which is a number.
//So, what can I tell is that using 2 "typeof" one after another makes Javascript focusing on to give the "typeof" of a "typeof".


