import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export interface TestimonialProps {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  initials: string;
}

export function TestimonialCard({
  id,
  name,
  location,
  quote,
  rating,
  initials,
}: TestimonialProps) {
  return (
    <Card className="p-6" data-testid={`card-testimonial-${id}`}>
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? "text-yellow-500 fill-yellow-500" : "text-muted"
            }`}
          />
        ))}
      </div>
      <p className="text-muted-foreground mb-6 italic">"{quote}"</p>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback className="bg-primary text-primary-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>
    </Card>
  );
}
