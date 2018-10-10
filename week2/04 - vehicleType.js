//A function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

function vehicleType(color, vehicle) {

    if (vehicle == 1) {
        console.log('a ' + color + ' car');
    }

    else if (vehicle == 2) {
        console.log('a ' + color + ' motorbike');
    }
    else {
        console.log("Please just use 1 for the car and 2 for the motorbike. \nWe don't have too many vehicles!");
    }
}

vehicleType("blue",1);
vehicleType("white",2);