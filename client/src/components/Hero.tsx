import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import heroImage from "@assets/generated_images/pyramids_of_giza_sunset.png";

export function Hero() {
  const [destination, setDestination] = useState("");

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Discover the Magic of the Arab World
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Premium travel experiences across Egypt, UAE, Jordan, Morocco and beyond
        </p>

        <div className="bg-white/10 backdrop-blur-md rounded-md p-4 md:p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
              <Input
                placeholder="Where to?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60"
                data-testid="input-destination"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
              <Input
                type="date"
                className="pl-10 bg-white/20 border-white/30 text-white"
                data-testid="input-date"
              />
            </div>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
              <Input
                placeholder="Travelers"
                type="number"
                min="1"
                defaultValue="2"
                className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60"
                data-testid="input-travelers"
              />
            </div>
            <Button size="lg" className="w-full" data-testid="button-search">
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
            Egypt Tours
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
            Dubai Packages
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
            Jordan Adventures
          </Button>
        </div>
      </div>
    </section>
  );
}
