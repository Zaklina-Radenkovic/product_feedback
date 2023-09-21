import LoadingSpinner from "@/components/LoadingSpinner";

const Loading = () => {
  return (
    <div className="w-full flex-center">
      {/* <Image
        src="assets/loader.svg"
        width={50}
        height={50}
        alt="loader"
        className="object-contain"
      /> */}
      <LoadingSpinner />
    </div>
  );
};
export default Loading;
