const axios = require('axios');

const getTextFromImage = async (str) => {


    const formattedText = str.replace(/[\r\n]/gm, ' ').toLowerCase();

    const foodText = await axios.post(`https://api.spoonacular.com/food/detect?apiKey=${process.env.SPONNACULARKEY}`, {text: formattedText}, {headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }});


    if(foodText){
        let foodList = '';
        foodText?.data?.annotations?.map(elem => {
            if(elem.tag === 'ingredient'){
                foodList+=` ${elem.annotation},`
            }
        });

        return foodList;
    }


}

exports.getTextFromImage = getTextFromImage;