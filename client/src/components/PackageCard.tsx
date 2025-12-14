import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Check } from "lucide-react";

export interface PackageProps {
  id: string;
  title: string;
  image: string;
  duration: string;
  groupSize: string;
  price: number;
  currency?: string;
  highlights: string[];
  badge?: string;
}

export function PackageCard({
  id,
  title,
  image,
  duration,
  groupSize,
  price,
  currency = "USD",
  highlights,
  badge,
}: PackageProps) {
  return (
    <Card className="overflow-hidden" data-testid={`card-package-${id}`}>
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          {badge && (
            <Badge className="absolute top-3 left-3">{badge}</Badge>
          )}
        </div>
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {duration}
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {groupSize}
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              {highlights.slice(0, 4).map((highlight, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between gap-4 pt-4 border-t">
            <div>
              <p className="text-sm text-muted-foreground">From</p>
              <p className="text-2xl font-bold text-primary">
                {currency} {price.toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground">per person</p>
            </div>
            <Button data-testid={`button-view-package-${id}`}>
              View Details
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
