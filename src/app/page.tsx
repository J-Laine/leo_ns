import ClockWordAnimation from "../components/ClockwordAnimation";
import ServiceCarousel from "../components/ServiceCarousel";

export default function Home() {
  return (
    <>
        <div className="bg-green-200 p-8 h-[450px] text-black flex items-center justify-center">
          <ClockWordAnimation />
        </div>
        <div className="bg-red-200 p-8 l-[250px] h-[450px] text-black flex items-center justify-center">
          <ServiceCarousel />
        </div>
        <div className="bg-blue-200 p-8 h-[650px] text-black flex items-center justify-center">
          yhetydenottolomake jne
        </div>
    </>
  );
}