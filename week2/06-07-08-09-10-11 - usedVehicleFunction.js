//06 - A function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(color, vehicle, age) {

    if (vehicle == 1) {
        (age > 0) ? console.log('a ' + color + ' used car') : console.log('a ' + color + ' new car')
    }

    else if (vehicle == 2) {
        (age > 0) ? console.log('a ' + color + ' used motorbike') : console.log('a ' + color + ' new motorbike')
    }
    else {
        console.log("Please just use 1 for the car and 2 for the motorbike. \nWe don't have too many vehicles!\nEven some of them are second hand.");
    }
}

vehicle("blue", 1, 5);
vehicle("white", 2, 0);

//07 - Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more:

const listOfVehicles = ["motorbike", "caravan", "bike", "space ship", "train"];

//08 - How do you get the third element from that list?
//Like this:

console.log(listOfVehicles[2]);

//09 - Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike":

function vehicleV2(color, vehicle, age) {

    for (i = 0; i < listOfVehicles.length; i++) {
        if (vehicle == i) {
            (age > 0) ? console.log("a " + color + " used " + listOfVehicles[i]) : console.log("a " + color + " new " + listOfVehicles[i])
        }
    }

    if (vehicle > listOfVehicles.length - 1) {
        console.log('Can you please enter a number lower than number', + vehicle, '?? Maximum number must be lower than ' + listOfVehicles.length);
    }
}

vehicleV2("black", 3, 2);

//10 - Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

function advertise() {

    let adText = "Amazing Joe's Garage, we service ";

    for (i = 0; i < listOfVehicles.length; i++) {

        if (i < listOfVehicles.length - 2) {
            adText += listOfVehicles[i] + "s, ";
        }

        if (i == listOfVehicles.length - 2) {
            adText += listOfVehicles[i] + " ";
        }

        if (i == listOfVehicles.length - 1) {
            adText += "and " + listOfVehicles[i] + "s.";
        }
    }
    return adText;
}

console.log(advertise());

//11 - What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

listOfVehicles.unshift("submarine");
console.log(advertise());