'use client'
import { SearchBarProps } from "@/types";
import React, { useState } from "react";
import { SearchManufacturer } from "./";

const SearchBar = ({title}:SearchBarProps) => {
    const [manufacturer,setManufacturer] = useState('')

  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
      </div>
    </form>
  );
};

export default SearchBar;
