import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DestinationCard } from "@/components/DestinationCard";
import { PackageCard } from "@/components/PackageCard";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialCard, TestimonialProps } from "@/components/TestimonialCard";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import type { Destination, Package } from "@shared/schema";

import pyramidsImage from "@assets/generated_images/pyramids_of_giza_sunset.png";
import dubaiImage from "@assets/generated_images/dubai_skyline_dusk_view.png";
import petraImage from "@assets/generated_images/petra_treasury_jordan.png";
import redSeaImage from "@assets/generated_images/red_sea_sharm_elsheikh.png";
import marrakechImage from "@assets/generated_images/marrakech_medina_morocco.png";
import luxorImage from "@assets/generated_images/luxor_temple_night.png";

const imageMap: Record<string, string> = {
  pyramids: pyramidsImage,
  dubai: dubaiImage,
  petra: petraImage,
  "red-sea": redSeaImage,
  marrakech: marrakechImage,
  luxor: luxorImage,
};

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

function DestinationsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Skeleton key={i} className="h-64 rounded-lg" />
      ))}
    </div>
  );
}

function PackagesSkeleton() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-80 rounded-lg" />
      ))}
    </div>
  );
}

export default function Home() {
  const { data: destinations = [], isLoading: destinationsLoading } = useQuery<Destination[]>({
    queryKey: ["/api/destinations"],
  });

  const { data: packages = [], isLoading: packagesLoading } = useQuery<Package[]>({
    queryKey: ["/api/packages"],
  });

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
            {destinationsLoading ? (
              <DestinationsSkeleton />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinations.map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    id={destination.id}
                    name={destination.name}
                    country={destination.country}
                    image={imageMap[destination.image] || destination.image}
                    startingPrice={destination.startingPrice}
                    isPopular={destination.isPopular ?? false}
                  />
                ))}
              </div>
            )}
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
            {packagesLoading ? (
              <PackagesSkeleton />
            ) : (
              <div className="grid lg:grid-cols-2 gap-6">
                {packages.map((pkg) => (
                  <PackageCard
                    key={pkg.id}
                    id={pkg.id}
                    title={pkg.title}
                    image={imageMap[pkg.image] || pkg.image}
                    duration={pkg.duration}
                    groupSize={pkg.groupSize}
                    price={pkg.price}
                    highlights={pkg.highlights}
                    badge={pkg.badge ?? undefined}
                  />
                ))}
              </div>
            )}
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
