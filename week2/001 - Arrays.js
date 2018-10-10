let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

//Adding Mauro's favorite animal to the end of array by using push() method:

favoriteAnimals.push('turtle');
console.log(favoriteAnimals);

//Adding Jim's favourite animal to between blowfish and capricorn by using splice() method:

favoriteAnimals.splice(1,0,'meerkat');
console.log('Now I think the value of the array will be something like this: [\'blowfish\',\'meerkat\', \'capricorn\', \'giraffe\', \'turtle\']' )
console.log(favoriteAnimals);

//Logging the length of array with a message:

console.log('The array has a length of: ',favoriteAnimals.length);

//Jason does not like giraffe. Let's delete it by using splice() again:

favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);

//Finding the index of 'meerkat' by using indexOf() method:

let meerkatFinder = favoriteAnimals.indexOf('meerkat');
console.log('The item you are looking for is at index: ',meerkatFinder);



