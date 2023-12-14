import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Suggestions from './feedback/components/Suggestions';
import Main from './components/Main';

export default async function Home() {
  return (
    <div className="relative flex flex-col md:px-[11.4%] md:py-[95px] xl:flex-row xl:gap-x-[30px]">
      <Sidebar />
      <Main>
        <Navbar />
        <Suggestions />
      </Main>
    </div>
  );
}
