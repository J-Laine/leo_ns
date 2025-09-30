import ClockWordAnimation from "../components/ClockwordAnimation";
import ServiceCarousel from "../components/Carousel/ServiceCarousel";
import { BookingButton } from '@/components/BookingButton';
import { ContactForm } from '@/components/ContactForm';
import { ServicesAndPrices } from '@/components/ServicesAndPrices';
import { AboutMe } from '@/components/AboutMe';
import { Lahjakortti } from '@/components/Giftcard';
import { Business } from '@/components/Business';
import { Testimonials } from '@/components/Testimonials';

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
        <BookingButton />
      </section>

      {/* About Me Section */}
      <section id="about" className="flex items-center justify-center min-h-[500px] sm:min-h-[600px] md:min-h-[700px] px-4 sm:px-6 md:px-8 scroll-mt-20">
        <AboutMe />
      </section>

      {/* Services and Pricing Section */}
      <section id="services-pricing" className="flex items-center justify-center min-h-[600px] sm:min-h-[700px] md:min-h-[800px] px-4 sm:px-6 md:px-8 scroll-mt-20">
        <ServicesAndPrices />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="flex items-center justify-center min-h-[600px] sm:min-h-[700px] md:min-h-[800px] px-4 sm:px-6 md:px-8 scroll-mt-20">
        <Testimonials />
      </section>

      {/* Gift Card Section */}
      <section id="giftcard" className="flex items-center justify-center min-h-[500px] sm:min-h-[600px] md:min-h-[700px] px-4 sm:px-6 md:px-8 scroll-mt-20">
        <Lahjakortti />
      </section>

      {/* Business Section */}
      <section id="business" className="flex items-center justify-center min-h-[500px] sm:min-h-[600px] md:min-h-[700px] px-4 sm:px-6 md:px-8 scroll-mt-20">
        <Business />
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="flex items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[650px] px-4 sm:px-6 md:px-8 scroll-mt-20">
        <ContactForm />
      </section>

    </div>
  );
}