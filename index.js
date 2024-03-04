const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

/* My first try which works in replit
function add(total, value) {
    return total + value;
}

let totalBatteries = batteryBatches.reduce(add);*/

const totalBatteries = batteryBatches.reduce((total, current) => total + current, 0 );

