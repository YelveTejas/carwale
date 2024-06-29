import {
  CarCard,
  CustomeFilter,
  Hero,
  SearchBar,
  ShowMore,
} from "@/components";
import { fuels, yearsOfProduction } from "@/constant";

import { HomeProps } from "@/types";
import { fetchCars } from "@/utilis";

export default async function Home({ searchParams }: HomeProps) {
//  console.log(searchParams, "searchParams");
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer,
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 12,
    model: searchParams.model || "",
  });

  const isEmpty = allCars.length === 0 || !Array.isArray(allCars) || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discovery">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalouge</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomeFilter title="fuel" options={fuels} />
            <CustomeFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore 
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > allCars.length}
             />
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
