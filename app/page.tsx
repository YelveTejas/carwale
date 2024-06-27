import { CarCard, CustomeFilter, Hero, SearchBar } from "@/components";
import { manufacturers } from "@/constant";
import { FilterProps, HomeProps } from "@/types";
import { fetchCars } from "@/utilis";
import { all } from "axios";
import { lutimes } from "fs";

import Image from "next/image";

export default async function Home({searchParams}:HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer,
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  // console.log(allCars)
  const isEmpty = allCars.length === 0 || !Array.isArray(allCars) || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discovery">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalouge</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filter">
          <SearchBar title="fuel" />
          <div className="home__filter-container">
            <CustomeFilter title="year" />
          </div>
        </div>
        {!isEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">No results</h2>
            <p className="mt-2">{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
