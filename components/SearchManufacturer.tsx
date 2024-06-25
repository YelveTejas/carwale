"use client";
import { manufacturers } from "@/constant";
import { SearchMaunfaracturerProps } from "@/types";
import {
  Button,
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Input,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchMaunfaracturerProps) => {
  const [query, setQuery] = useState("");
  const filtered =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  console.log(filtered, "filtered");
  console.log(query, "query");
  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer}>
        <div className="relative w-full">
          <Button className="absolute top-[14px]">
            <Image
              src={"/car-logo.svg"}
              width={20}
              className="ml-4"
              height={20}
              alt="car logo"
            ></Image>
          </Button>
          <ComboboxInput
            className="search-manufacturer__input"
            value={query}
            displayValue={(item: string) => item}
            placeholder="Volkswagen"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions>
              {filtered.map((item) => (
                <ComboboxOption
                  key={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>

                      {/* Show an active blue background color if the option is selected */}
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-pribg-primary-purple"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
