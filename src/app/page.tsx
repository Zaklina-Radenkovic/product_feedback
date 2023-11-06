// "use client";
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Suggestions from './feedback/components/Suggestions';
import { Suspense, lazy } from 'react';
import Loading from './loading';
import Main from './components/Main';

// const Suggestions = lazy(() => import("@/components/feedbacks/Suggestions"));
// const Navbar = lazy(() => import("@/components/Navbar"));
// const Sidebar = lazy(() => import("@/components/Sidebar"));

export default async function Home() {
  return (
    //Unsupported Server Component type: {...}? checking is it suspense/useclient
    <div className="relative flex flex-col md:px-[11.4%] md:py-[95px] xl:flex-row xl:gap-x-[30px]">
      <Sidebar />
      <Main>
        <Navbar />
        <Suggestions />
      </Main>
    </div>
  );
}
