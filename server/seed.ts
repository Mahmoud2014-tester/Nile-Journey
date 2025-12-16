import { db } from "./db";
import { destinations, packages } from "@shared/schema";

async function seed() {
  console.log("Seeding database...");
  
  const existingDestinations = await db.select().from(destinations);
  if (existingDestinations.length > 0) {
    console.log("Database already seeded, skipping...");
    return;
  }

  await db.insert(destinations).values([
    {
      name: "Cairo & Pyramids",
      country: "Egypt",
      image: "pyramids",
      startingPrice: 599,
      isPopular: true,
    },
    {
      name: "Dubai",
      country: "UAE",
      image: "dubai",
      startingPrice: 899,
      isPopular: true,
    },
    {
      name: "Petra",
      country: "Jordan",
      image: "petra",
      startingPrice: 749,
      isPopular: false,
    },
    {
      name: "Sharm El Sheikh",
      country: "Egypt",
      image: "red-sea",
      startingPrice: 449,
      isPopular: true,
    },
    {
      name: "Marrakech",
      country: "Morocco",
      image: "marrakech",
      startingPrice: 699,
      isPopular: false,
    },
    {
      name: "Luxor & Aswan",
      country: "Egypt",
      image: "luxor",
      startingPrice: 799,
      isPopular: false,
    },
  ]);

  console.log("Destinations seeded!");

  await db.insert(packages).values([
    {
      title: "Egypt Highlights Tour",
      image: "luxor",
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
      title: "Dubai Luxury Experience",
      image: "dubai",
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
      title: "Jordan Adventure",
      image: "petra",
      duration: "6 Days / 5 Nights",
      groupSize: "Max 10 people",
      price: 1199,
      highlights: [
        "Full day exploring Petra",
        "Wadi Rum desert experience",
        "Dead Sea float experience",
        "Jerash Roman ruins visit",
      ],
      badge: null,
    },
    {
      title: "Imperial Morocco Tour",
      image: "marrakech",
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
  ]);

  console.log("Packages seeded!");
  console.log("Database seeding complete!");
}

seed().catch(console.error).finally(() => process.exit(0));
