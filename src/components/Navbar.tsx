import Image from "next/image";
import suggestions from "../../public/assets/images/icon-suggestions.svg";
import Button from "./button/Button";

const Navbar = () => {
  return (
    <div className="sub-header px-5">
      <div className="flex items-center">
        <Image
          priority
          src={suggestions}
          alt="icon"
          className="inline-block "
        />
        <span className="ml-3 font-bold">6 Sugestions</span>

        <span className="ml-8">Sort by:</span>
        <input />
      </div>
      <Button className="button-feedback">+ Add feedback</Button>
    </div>
  );
};

export default Navbar;
