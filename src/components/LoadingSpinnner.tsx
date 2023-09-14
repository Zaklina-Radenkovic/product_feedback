import Image from "next/image";
import loader from "../../public/assets/loader.svg";
const LoadingSpinnner = () => {
  return (
    <div className="">
      <Image
        src={loader}
        width={50}
        height={50}
        alt="loader"
        className="object-contain"
        priority
      />
    </div>
  );
};
export default LoadingSpinnner;
