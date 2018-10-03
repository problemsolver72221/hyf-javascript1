var arrayStore = []
arrayStore.push(1,"HackYourFuture",["Kaffe",true,3.14],false);
console.log('Here is what we have inside the array: '+arrayStore);
console.log('And here are the types of variables: ',typeof arrayStore[0], typeof arrayStore[1], typeof arrayStore[2], '--Wait! This object have some elements inside.\nLet\'s check them: --',typeof arrayStore[2][0], typeof arrayStore[2][1], typeof arrayStore[2][2], '--object list is done.', typeof arrayStore[3]);


var comparing = (6/0)/(10/0);
console.log(comparing, typeof comparing);

/* Result:

Here is what we have inside the array: 1,HackYourFuture,Kaffe,true,3.14,false
And here are the types of variables:  number string object --Wait! This object have some elements inside.
Let's check them: -- string boolean number --object list is done. boolean
NaN 'number'

*/