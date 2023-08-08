"use client";
import { useRouter } from "next/navigation";
import GoBackButton from "@/components/button/GoBackButton";
import { useState } from "react";
import Image from "next/image";
import suggestions from "../../public/assets/images/icon-suggestions.svg";
import { useSortedFeedbackContext } from "@/state/sortedFeedback";
import ButtonFeedback from "./button/ButtonFeedback";

const sortOptions = [
  {
    label: "Most Upvotes",
    value: "mostUpvotes",
  },
  {
    label: "Least Upvotes",
    value: "leastUpvotes",
  },
  {
    label: "Most Comments",
    value: "mostComments",
  },
  {
    label: "Least Comments",
    value: "leastComments",
  },
];

const Navbar = () => {
  const { setSort, count } = useSortedFeedbackContext();
  const [sortKey, setSortKey] = useState("mostUpvotes");

  const router = useRouter();

  const handleSortChange = (event: React.BaseSyntheticEvent) => {
    setSortKey(event.target.value);
    setSort(sortKey);
  };

  return (
    <div className="navbar pl-[1.56rem] pr-[0.93rem]">
      <div className="flex items-center">
        <Image
          priority
          src={suggestions}
          alt="icon"
          className="inline-block "
        />
        <span className="ml-3 font-bold">{count} Suggestions</span>

        <label className="ml-8 text-sm" htmlFor="search">
          Sort by:
        </label>

        <select
          onChange={handleSortChange}
          name="sort"
          value={sortKey}
          className="bg-secondary border-none text-gray-900 text-sm font-bold rounded-lg focus:outline-none visited:border-none p-2.5"
        >
          {sortOptions.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
      <ButtonFeedback onClick={() => router.push("/create-feedback")}>
        {" "}
        &#43; Add feedback{" "}
      </ButtonFeedback>
    </div>
  );
};

export default Navbar;
