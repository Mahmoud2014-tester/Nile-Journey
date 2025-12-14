import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export interface DestinationProps {
  id: string;
  name: string;
  country: string;
  image: string;
  startingPrice: number;
  currency?: string;
  isPopular?: boolean;
}

export function DestinationCard({
  id,
  name,
  country,
  image,
  startingPrice,
  currency = "USD",
  isPopular,
}: DestinationProps) {
  return (
    <Card
      className="group overflow-hidden cursor-pointer"
      data-testid={`card-destination-${id}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isPopular && (
          <Badge className="absolute top-3 left-3" variant="secondary">
            Popular
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center gap-1 text-white/80 text-sm mb-1">
            <MapPin className="h-4 w-4" />
            {country}
          </div>
          <h3 className="text-xl font-bold text-white">{name}</h3>
        </div>
      </div>
      <div className="p-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Starting from</p>
          <p className="text-lg font-bold text-primary">
            {currency} {startingPrice.toLocaleString()}
          </p>
        </div>
        <Button variant="outline" size="sm" data-testid={`button-explore-${id}`}>
          Explore
        </Button>
      </div>
    </Card>
  );
}
