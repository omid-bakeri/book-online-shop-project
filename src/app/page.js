import Shopicon from "./components/icons/shopicon";
import AboutIcon from "./components/icons/AboutIcon";
import About from "./components/layout/About";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import Menu from "./components/layout/Menu";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <>
    <Hero/>
    <div className="text-2xl font-bold 
    p-4 bg-black px-4 py-2  ml-3 mb-10 
    rounded-full text-white select-none flex 
    justify-center items-center gap-2 w-[150px]"><Shopicon/> Shop</div>
    <div className="grid w-[98%] mt-5
     mx-auto grid-cols-4 gap-4">
      <Menu/>
      <Menu/>
      <Menu/>
      <Menu/>
      <Menu/>
      <Menu/>
      <Menu/>
      <Menu/>
    </div>
<div className="flex flex-col gap-0">
<div className="text-2xl font-bold 
    p-4 bg-black px-4 py-2 ml-3 
    rounded-full text-white select-none flex 
    justify-center items-center gap-2 w-[150px]"><AboutIcon/> About</div>
    <About/>
</div>
    </>
  );
}
