import { CustomeFilter, Hero, SearchBar } from "@/components";

import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discovery">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalouge</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filter">
          <SearchBar title='fuel' />
          <div className="home__filter-container">
            <CustomeFilter title="year"/>
          </div>
        </div>
      </div>
    </main>
  );
}
