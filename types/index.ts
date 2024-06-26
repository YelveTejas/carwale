
import { manufacturers } from './../constant/index';

import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?:string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface OptionProps {
  title: string;
  value: string;
}
// types.ts
export interface SearchMaunfaracturerProps {
  manufacturer: string;
  setManufacturer: React.Dispatch<React.SetStateAction<string>>;
}

export interface showMoreProps {
  pageNumber: number;
  isNext: boolean;
}
export interface customFilterProps{
  title :string
  options : OptionProps[]
}

export interface SearchBarProps {
  title:string
} 

export interface FilterProps{
  manufacturer : string,
  model : string,
  year : number,
  fuel : string,
  limit : number,

}
export interface HomeProps {
  searchParams: FilterProps;
}


export interface CarProps {
  city_mpg:number
  class:string
  combination_mpg:number
  cylinders:number
  displacement:number
  drive:string
  fuel_type:string
  highway_mpg:number
  make:string
  model:string
  transmission:string
  year:number
}