import { Users, MapPin, Star, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Travelers" },
  { icon: MapPin, value: "50+", label: "Destinations" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: Award, value: "15+", label: "Years Experience" },
];

export function StatsSection() {
  return (
    <section className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <stat.icon className="h-8 w-8 mx-auto mb-3 opacity-80" />
              <p className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
