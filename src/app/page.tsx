import ClockWordAnimation from "../components/ClockwordAnimation";
import ServiceCarousel from "../components/Carousel/ServiceCarousel";
import { BookingButton } from '@/components/BookingButton';

export default function Home() {
  return (
    <>
        <div className="p-8 h-[450px] flex items-center justify-center">
          <ClockWordAnimation />
        </div>
        <div className="p-8 h-[450px] flex items-center justify-center">
          <ServiceCarousel/>
        </div>
        <div>
          <BookingButton href="/varaa-aika" />
        </div>
        <div className="p-8 h-[650px] flex items-center justify-center">
          yhetydenottolomake jne
        </div>
    </>
  );
}