import Banner from "./components/Banner";
import Course from "./components/Course";
import Footer from "./components/Footer";
import Header from "./components/Header";


export default function Home() {
  return (
    <div className="bg-[#3d3d3d] text-white text-center">
      <Header/>
      <Banner/>
      <Course/>
      <Footer/>
  
    </div>
   
  );
}
