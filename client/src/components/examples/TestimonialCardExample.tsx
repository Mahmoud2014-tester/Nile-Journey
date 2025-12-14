import { TestimonialCard } from "../TestimonialCard";

export default function TestimonialCardExample() {
  return (
    <div className="max-w-md">
      <TestimonialCard
        id="1"
        name="Ahmed Hassan"
        location="Cairo, Egypt"
        quote="An unforgettable experience! The team planned everything perfectly. From the Pyramids to Petra, every moment was magical."
        rating={5}
        initials="AH"
      />
    </div>
  );
}
