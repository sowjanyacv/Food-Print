const {fruitsVeggiesList, animalBasedList, highFootprintFoodList, fishMeatList} = require('./foodList.js');

const calculateScoreAndExpiryDate = (foodItems) => {
    let highCarbonFoodScore = 0;
    let expiryDateFruitsVeggies;
    let expiryDateAnimalBased;
    let expiryDateFishMeat;
    let carbonFootprintScore;

    const foodItemsArr = foodItems.split(',')

    foodItemsArr.map(item => {

        if(highFootprintFoodList.includes(item)) highCarbonFoodScore+=1;

        if(fruitsVeggiesList.includes(item)){
            expiryDateFruitsVeggies = 'The fresh vegetables and/or fruits you recently bought will last 3 to 5 days.';
        }

        if(animalBasedList.includes(item)){
            expiryDateAnimalBased = 'The dairy products and/or eggs you recently bought will last 5 days to several weeks.';
        }

        if(fishMeatList.includes(item)){
            expiryDateFishMeat = `The fish and/or meat you recently bought will last 1 to 2 days if it is fresh.`;
        }

    })

const halfItems = Math.round(foodItemsArr.length / 2);

if(highCarbonFoodScore > halfItems){
    carbonFootprintScore = 'high';
} else if(highCarbonFoodScore === halfItems){
    carbonFootprintScore = 'medium';
} else {
    carbonFootprintScore = 'low';
}

const reminderText = `${expiryDateFruitsVeggies}${expiryDateAnimalBased}${expiryDateFishMeat}`;

console.log(carbonFootprintScore, reminderText);

return {carbonFootprintScore: carbonFootprintScore, reminder: reminderText}
};

exports.calculateScoreAndExpiryDate = calculateScoreAndExpiryDate;