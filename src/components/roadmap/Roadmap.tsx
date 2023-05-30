import Link from "next/link";

const Roadmap = () => {
  return (
    <div className="bg-white p-5  rounded-lg flex flex-col">
      <div className="flex justify-between gap-2 pb-6">
        <h3 className="font-bold text-secondary">Roadmap</h3>
        <Link
          href=""
          className="text-xs underline text-blue hover:text-blue/75 font-semibold hover:transition"
        >
          View
        </Link>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 justify-items-start text-gray">
        <div className="flex flex-none pb-3.5 ">
          <span className="roadmap-tag planned"></span>
          <h3 className="">Planned</h3>
        </div>
        <span className="roadmap-span">1</span>
        <div className=" flex flex-none pb-3.5">
          <span className="roadmap-tag live"></span>
          <h3 className="">In-progress</h3>
        </div>
        <span className="roadmap-span">2</span>
        <div className=" flex flex-none pb-3.5">
          <span className="roadmap-tag progress"></span>
          <h3 className="self-center">Live</h3>
        </div>
        <span className="roadmap-span">3</span>
      </div>
    </div>
  );
};

export default Roadmap;
