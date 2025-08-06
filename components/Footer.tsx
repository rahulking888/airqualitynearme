import { Facebook, Instagram, Linkedin, X,  } from "lucide-react";
import Link from "next/link";


const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61579195018666",
    label: "Facebook",
  },
  {
    icon: X,
    href: "https://x.com/air_quality_now",
    label: "X",
  },
  {
    icon: Linkedin,
    href: "http://www.linkedin.com/in/realtime-air-quality-12111b379",
    label: "Linkedin",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/airqualitynearme/",
    label: "Instagram",
  },
];

const quickLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Disclaimer",
    href: "/disclaimer",
  },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand name , social icon */}
          <div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-4">
              AirQualityNearMe
            </h3>
            <p className="text-muted-foreground mb-4">
              The air quality information on this site is for general purposes. While we strive for accuracy, the data may not always be complete or error-free. Consult official authorities for critical decisions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    className="text-primary hover:text-foreground transition-colors duration-300"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}

          <div>
            <h4 className="font-semibold text-foreground mb-4">Disclaimer</h4>
            <p className="text-muted-foreground mb-4">
              The air quality information displayed on this site is intended for general informational purposes only. While we strive for accuracy, we cannot guarantee that the data is always complete, real-time, or error-free. Please consult official health or environmental authorities for critical decisions.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Your Email" />
              <Button>Subscribe</Button>
            </div> */}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} AirQualityNearMe • All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
