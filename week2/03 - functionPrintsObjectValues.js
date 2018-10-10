//--An object:

//Creating the object:

let itBe = {
    a: "here",
    b: 4,
    c: "the",
    d: undefined,
    e: true
}

//And a function that takes the object as a parameter and prints out all of its properties and values:

function iCanReadYourObject(itBe) {

    itBeTypes = ''

    for (const i in itBe) {
        itBeTypes += typeof itBe[i] + ", ";
    }

    return itBe;
}

console.log('Here are the values of the object:', iCanReadYourObject(itBe), '\nHere are the properties of values: [', iCanReadYourObject(itBeTypes), ']');
