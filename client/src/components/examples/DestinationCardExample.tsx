import { DestinationCard } from "../DestinationCard";
import petraImage from "@assets/generated_images/petra_treasury_jordan.png";

export default function DestinationCardExample() {
  return (
    <div className="max-w-sm">
      <DestinationCard
        id="petra"
        name="Petra"
        country="Jordan"
        image={petraImage}
        startingPrice={899}
        isPopular
      />
    </div>
  );
}
