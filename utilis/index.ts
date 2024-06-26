import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
//   params: {model: 'corolla'},
//   headers: {
//     'x-rapidapi-key': 'b4c868523dmshb17b377f0a526f8p124080jsn21d9429b5148',
//     'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }



export async function fetchCars (){
    const headers = {
        'X-RapidAPI-Key': 'b4c868523dmshb17b377f0a526f8p124080jsn21d9429b5148',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers
    })
    const data = await response.json()

    return data
}


export const CalculateRent = (city_mpg: number, year: number) => {

    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1;
    const ageFactor = 0.05 // Additional rate per mile driven

    // Calculate additional rate per year
    const mileageRate = city_mpg * mileageFactor
    const ageRate = (new Date().getFullYear() - year) * ageFactor

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
   return   rentalRatePerDay.toFixed(0)
}   