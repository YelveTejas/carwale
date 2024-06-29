"use client";
import { showMoreProps } from "@/types";
import React from "react";
import CustomButton from "./CustomButton";
import { UpdatedSearchParams } from "@/utilis";
import { useRouter } from "next/navigation";

const ShowMore = ({ pageNumber, isNext }: showMoreProps) => {
  const router = useRouter();
  const handleNavgation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newpathName = UpdatedSearchParams("limit", newLimit.toString());
    window.location.href = newpathName;

    router.push(newpathName);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          containerStyles="bg-primary-blue rounded-full"
          btnType="button"
          handleClick={handleNavgation}
        />
      )}
    </div>
  );
};

export default ShowMore;
