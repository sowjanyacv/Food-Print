const axios = require('axios');

const getTextFromImage = async (str) => {
    //isTextFood
    console.log('str', typeof str);

    const formattedText = str.replace(/[\r\n]/gm, ' ').toLowerCase();

    const foodText = await axios.post(`https://api.spoonacular.com/food/detect?apiKey=${process.env.SPONNACULARKEY}`, {text: formattedText}, {headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }});
    console.log('foodText', foodText);


    if(foodText){
        console.log('foodText?.data?.annotations', foodText.data.annotations)
        let foodList = '';
        foodText?.data?.annotations?.map(elem => {
            if(elem.tag === 'ingredient'){
                foodList+=` ${elem.annotation},`
            }
        });

        console.log('foodList', foodList);
        return foodList;
    }


}

exports.getTextFromImage = getTextFromImage;