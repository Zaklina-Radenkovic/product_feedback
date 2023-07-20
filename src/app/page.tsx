import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Suggestions from "@/components/suggestions/Suggestions";

export default async function Home() {
  return (
    <div className="container flex gap-x-[30px]">
      <Sidebar />
      <main className="basis-3/4">
        <Navbar />
        <Suggestions />
      </main>
    </div>
  );
}
