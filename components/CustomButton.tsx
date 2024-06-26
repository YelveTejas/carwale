"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
import React from "react";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  isDisabled,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {
        rightIcon && (
          <div className="relative w-[24px] h-[24px]">
            <Image src={rightIcon} fill className="object-contain" alt="right arrow" />
          </div>
        )
      }
    </button>
  );
};

export default CustomButton;
