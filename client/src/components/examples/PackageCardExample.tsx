import { PackageCard } from "../PackageCard";
import luxorImage from "@assets/generated_images/luxor_temple_night.png";

export default function PackageCardExample() {
  return (
    <div className="max-w-4xl">
      <PackageCard
        id="egypt-highlights"
        title="Egypt Highlights Tour"
        image={luxorImage}
        duration="7 Days / 6 Nights"
        groupSize="Max 12 people"
        price={1299}
        highlights={[
          "Visit the Great Pyramids of Giza",
          "Cruise the Nile from Luxor to Aswan",
          "Explore the Valley of the Kings",
          "Guided tours with Egyptologist",
        ]}
        badge="Best Seller"
      />
    </div>
  );
}
