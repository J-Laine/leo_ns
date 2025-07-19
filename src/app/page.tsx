import ClockWordAnimation from "../components/ClockwordAnimation";
import ServiceCarousel from "../components/Carousel/ServiceCarousel";
import { BookingButton } from '@/components/BookingButton';
import { ContactForm } from '@/components/ContactForm';
import { ServicesAndPrices } from '@/components/ServicesAndPrices';

export default function Home() {
  return (
    <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
      {/* Hero Section with ClockWordAnimation */}
      <section className="flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[450px] px-4 sm:px-6 md:px-8">
        <ClockWordAnimation />
      </section>
      
      {/* Services Section */}
      <section className="flex items-center justify-center min-h-[350px] sm:min-h-[400px] md:min-h-[450px] px-4 sm:px-6 md:px-8">
        <ServiceCarousel/>
      </section>
      
      {/* Booking Section */}
      <section className="px-4 sm:px-6 md:px-8">
        <BookingButton href="/varaa-aika" />
      </section>

      {/* Services and Pricing Section */}
      <section className="flex items-center justify-center min-h-[600px] sm:min-h-[700px] md:min-h-[800px] px-4 sm:px-6 md:px-8">
        <ServicesAndPrices />
      </section>

      {/* Contact Form Section */}
      <section className="flex items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[650px] px-4 sm:px-6 md:px-8">
        <ContactForm />
      </section>

    </div>
  );
}