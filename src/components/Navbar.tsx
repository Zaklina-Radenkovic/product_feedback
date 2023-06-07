"use client";
import Image from "next/image";
import suggestions from "../../public/assets/images/icon-suggestions.svg";
import Button from "./button/Button";
import { useFeedbackContext } from "@/state/feedback";

const Navbar = () => {
  const { count } = useFeedbackContext();

  return (
    <div className="navbar px-5">
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
          name=""
          id="search"
          className="bg-secondary border-none text-gray-900 text-sm font-bold focus:outline-none visited:border-none p-2.5"
        >
          <option value="">Most Upvotes</option>
          <option value="">Least Upvotes</option>
          <option value="">Most Comments</option>
          <option value="">Least Upvotes</option>
        </select>
      </div>
      <Button className="button-feedback">+ Add feedback</Button>
    </div>
  );
};

export default Navbar;
