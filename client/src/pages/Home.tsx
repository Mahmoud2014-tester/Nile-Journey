import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DestinationCard, DestinationProps } from "@/components/DestinationCard";
import { PackageCard, PackageProps } from "@/components/PackageCard";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialCard, TestimonialProps } from "@/components/TestimonialCard";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

import pyramidsImage from "@assets/generated_images/pyramids_of_giza_sunset.png";
import dubaiImage from "@assets/generated_images/dubai_skyline_dusk_view.png";
import petraImage from "@assets/generated_images/petra_treasury_jordan.png";
import redSeaImage from "@assets/generated_images/red_sea_sharm_elsheikh.png";
import marrakechImage from "@assets/generated_images/marrakech_medina_morocco.png";
import luxorImage from "@assets/generated_images/luxor_temple_night.png";

// todo: remove mock functionality - replace with API data
const destinations: DestinationProps[] = [
  {
    id: "cairo",
    name: "Cairo & Pyramids",
    country: "Egypt",
    image: pyramidsImage,
    startingPrice: 599,
    isPopular: true,
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    image: dubaiImage,
    startingPrice: 899,
    isPopular: true,
  },
  {
    id: "petra",
    name: "Petra",
    country: "Jordan",
    image: petraImage,
    startingPrice: 749,
  },
  {
    id: "sharm",
    name: "Sharm El Sheikh",
    country: "Egypt",
    image: redSeaImage,
    startingPrice: 449,
    isPopular: true,
  },
  {
    id: "marrakech",
    name: "Marrakech",
    country: "Morocco",
    image: marrakechImage,
    startingPrice: 699,
  },
  {
    id: "luxor",
    name: "Luxor & Aswan",
    country: "Egypt",
    image: luxorImage,
    startingPrice: 799,
  },
];

// todo: remove mock functionality - replace with API data
const packages: PackageProps[] = [
  {
    id: "egypt-highlights",
    title: "Egypt Highlights Tour",
    image: luxorImage,
    duration: "7 Days / 6 Nights",
    groupSize: "Max 12 people",
    price: 1299,
    highlights: [
      "Visit the Great Pyramids of Giza & Sphinx",
      "Cruise the Nile from Luxor to Aswan",
      "Explore the Valley of the Kings",
      "Guided tours with certified Egyptologist",
    ],
    badge: "Best Seller",
  },
  {
    id: "dubai-luxury",
    title: "Dubai Luxury Experience",
    image: dubaiImage,
    duration: "5 Days / 4 Nights",
    groupSize: "Private tour",
    price: 1599,
    highlights: [
      "Burj Khalifa observation deck",
      "Desert safari with BBQ dinner",
      "Dubai Marina yacht cruise",
      "5-star hotel accommodation",
    ],
    badge: "Premium",
  },
  {
    id: "jordan-adventure",
    title: "Jordan Adventure",
    image: petraImage,
    duration: "6 Days / 5 Nights",
    groupSize: "Max 10 people",
    price: 1199,
    highlights: [
      "Full day exploring Petra",
      "Wadi Rum desert experience",
      "Dead Sea float experience",
      "Jerash Roman ruins visit",
    ],
  },
  {
    id: "morocco-imperial",
    title: "Imperial Morocco Tour",
    image: marrakechImage,
    duration: "8 Days / 7 Nights",
    groupSize: "Max 14 people",
    price: 1449,
    highlights: [
      "Marrakech medina exploration",
      "Sahara Desert camel trek",
      "Fes cultural immersion",
      "Atlas Mountains day trip",
    ],
    badge: "New",
  },
];

// todo: remove mock functionality - replace with API data
const testimonials: TestimonialProps[] = [
  {
    id: "1",
    name: "Ahmed Hassan",
    location: "Cairo, Egypt",
    quote: "An unforgettable experience! The team planned everything perfectly. From the Pyramids to Petra, every moment was magical.",
    rating: 5,
    initials: "AH",
  },
  {
    id: "2",
    name: "Fatima Al-Rashid",
    location: "Dubai, UAE",
    quote: "Professional service and attention to detail. They made our family vacation stress-free and memorable. Highly recommend!",
    rating: 5,
    initials: "FA",
  },
  {
    id: "3",
    name: "Omar Khalil",
    location: "Amman, Jordan",
    quote: "Best travel agency I've worked with. Great value for money and the guides were incredibly knowledgeable.",
    rating: 5,
    initials: "OK",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />

        <section id="destinations" className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Popular Destinations
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore the most sought-after destinations in the Arab world, from ancient wonders to modern marvels.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((destination) => (
                <DestinationCard key={destination.id} {...destination} />
              ))}
            </div>
          </div>
        </section>

        <StatsSection />

        <section id="packages" className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Tour Packages
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Curated travel experiences with everything included. Just pack your bags and we'll handle the rest.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {packages.map((pkg) => (
                <PackageCard key={pkg.id} {...pkg} />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Travelers Say
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our happy customers have to say about their journeys.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
