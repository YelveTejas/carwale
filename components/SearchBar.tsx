"use client";
import { SearchBarProps } from "@/types";
import React, { useState } from "react";
import { SearchManufacturer } from "./";
import Image from "next/image";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
const SearchButton = ({ otherstyle }: { otherstyle: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherstyle}`}>
    <Image
      src={`/magnifying-glass.svg`}
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);
const SearchBar = ({ title }: SearchBarProps) => {
  const [manufacturer, setManufacturer] = useState("");
  const router = useRouter();
  const [model, setModel] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" && model === "") {
      return alert("Please fill in the search bar");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if(model) 
      {
        searchParams.set("model", model)
      }
      else{
        searchParams.delete("model")
      }

      if(manufacturer){
        searchParams.set("manufacturer", manufacturer)
      }else{
        searchParams.delete("manufacturer")
      }

      const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

      router.push(newPathname);
      
  }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherstyle={"sm:hidden"} />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          alt="car model"
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Modal"
          className="searchbar__input"
        />
        <SearchButton otherstyle="max-sm:hidden" />
      </div>
    </form>
  );
};

export default SearchBar;
