// "use client";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Suggestions from "@/components/feedbacks/Suggestions";
import { Suspense, lazy } from "react";
import LoadingSpinnner from "../components/LoadingSpinnner";

// const Suggestions = lazy(() => import("@/components/feedbacks/Suggestions"));
// const Navbar = lazy(() => import("@/components/Navbar"));
// const Sidebar = lazy(() => import("@/components/Sidebar"));

export default async function Home() {
  return (
    //Unsupported Server Component type: {...}? checking is it suspense/useclient
    <Suspense fallback={<LoadingSpinnner />}>
      <div className="container flex gap-x-[30px]">
        <Sidebar />
        <main className="basis-3/4">
          <Navbar />
          <Suggestions />
        </main>
      </div>
    </Suspense>
  );
}
