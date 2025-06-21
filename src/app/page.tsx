import ClockWordAnimation from "../components/ClockwordAnimation";
import ServiceCarousel from "../components/Carousel/ServiceCarousel";


export default function Home() {
  return (
    <>
        <div className="bg-red-100 border-8 border-red-800 p-8 h-[450px] text-black flex items-center justify-center">
          <ClockWordAnimation />
        </div>
        <div className="bg-blue-300 border-8 border-blue-800 p-8 h-[450px] text-black flex items-center justify-center">
            <ServiceCarousel/>          
        </div>
        <div className="bg-green-100 border-8 border-green-800 p-8 h-[650px] text-black flex items-center justify-center">
          yhetydenottolomake jne
        </div>
    </>
  );
}