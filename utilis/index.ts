import { FilterProps } from "./../types/index";
import { CarProps } from "@/types";
import axios from "axios";

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

export async function fetchCars(filters: FilterProps) {
    const {manufacturer, year, model, limit, fuel} = filters
  const headers = {
    "X-RapidAPI-Key": "b4c868523dmshb17b377f0a526f8p124080jsn21d9429b5148",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );
  const data = await response.json();

  return data;
}

export const CalculateRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1;
  const ageFactor = 0.05; // Additional rate per mile driven

  // Calculate additional rate per year
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  return rentalRatePerDay.toFixed(0);
};

export async function fetchCarPhotos(car: CarProps, angle?: string) {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  url.toString();
}
