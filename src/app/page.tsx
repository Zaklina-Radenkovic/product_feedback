import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Feedbacks from "@/components/feedbacks/Feedbacks";

export default async function Home() {
  return (
    <div className="container flex gap-x-[30px]">
      <Sidebar />
      <main className="basis-3/4">
        <Navbar />
        <Feedbacks />
      </main>
    </div>
  );
}
