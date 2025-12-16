import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiTelegram } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

const destinations = [
  "Egypt",
  "UAE (Dubai)",
  "Jordan",
  "Morocco",
  "Saudi Arabia",
  "Other",
];

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // todo: remove mock functionality
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start your journey? Send us your details and we'll create a personalized travel plan for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    data-testid="input-contact-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    data-testid="input-contact-email"
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+20 xxx xxx xxxx"
                    data-testid="input-contact-phone"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination">Destination Interest</Label>
                  <Select>
                    <SelectTrigger data-testid="select-destination">
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      {destinations.map((dest) => (
                        <SelectItem key={dest} value={dest.toLowerCase()}>
                          {dest}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dates">Preferred Travel Dates</Label>
                <Input
                  id="dates"
                  type="text"
                  placeholder="e.g., March 15-25, 2025"
                  data-testid="input-travel-dates"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your dream trip..."
                  rows={4}
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
                data-testid="button-submit-contact"
              >
                {isSubmitting ? "Sending..." : "Request Quote"}
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Office Address</p>
                    <p className="text-sm text-muted-foreground">
                      123 Tahrir Square, Downtown Cairo, Egypt
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+20 2 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">hello@safartravel.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Working Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Sun - Thu: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-sky-500 text-white">
              <div className="flex items-center gap-3 mb-3">
                <SiTelegram className="h-6 w-6" />
                <h3 className="text-xl font-bold">Quick Telegram</h3>
              </div>
              <p className="mb-4 text-white/90">
                Get instant responses! Chat with our travel experts on Telegram.
              </p>
              <Button
                variant="secondary"
                className="w-full bg-white text-sky-500 hover:bg-white/90"
                onClick={() => window.open("https://t.me/safartravel", "_blank")}
                data-testid="button-telegram"
              >
                Start Chat
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
