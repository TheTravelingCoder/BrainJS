const restaurants = {
    'Brilliant Yellow Corral': 'Monday',
    'Penny"s': 'Tuesday',
    'Right Coast Wings': 'Wednesday',
    'The Delusion Last Railway car': 'Thursday',
    'Fun Day Inn': 'Friday',
    'Jhop': 'Saturday',
    'Owls': 'Sunday'
};

const trainingData = [];

for (var restaurantName in restaurants){
    const dayOfWeek = restaurants[restaurantName];
    trainingData.push({
        input: {[dayOfWeek]: 1},
        output: {[restaurantName]: 1}
    })
}

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const stats = net.train(trainingData);

console.log(stats);

console.log(net.run({ 'Monday': 1 }));

//Function that cycles through the restaurants to find the most likely
function restaurantForDay(dayOfTheWeek){
    const result = net.run({ [dayOfTheWeek] :1 });
    let highestValue = 0;
    let highestRestaurantName = '';
    for (var restaurantName in result){
        if (result[restaurantName] > highestValue){
            highestValue = result[restaurantName];
            highestRestaurantName = restaurantName;
        }
    }
    return highestRestaurantName;
}

console.log(restaurantForDay('Monday'));
console.log(restaurantForDay('Tuesday'));
console.log(restaurantForDay('Wednesday'));
console.log(restaurantForDay('Thursday'));
console.log(restaurantForDay('Friday'));
console.log(restaurantForDay('Saturday'));
console.log(restaurantForDay('Sunday'));