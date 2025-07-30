
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const socialLinks = [
{
  icon: Twitter,
  href: "#",
  label: "Twitter",
},
{
  icon: Github,
  href: "#",
  label: "Github",
},
{
  icon: Linkedin,
  href: "#",
  label: "Linkedin",
},
{
  icon: Instagram,
  href: "#",
  label: "Instagram",
},
];

const quickLinks = [
  {
    name: "Home", href: "/",
  },
   {
    name: "Categories", href: "/categories",
  },
   {
    name: "About Us", href: "/about-us",
  },
   {
    name: "Contact Us", href: "/contact-us",
  },
   {
    name: "Privacy Policy", href: "/privacy-policy",
  },
];





export default function Footer () {
  return <footer className="bg-background border-t border-border/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       {/* Brand name , social icon */}
        <div>
          <h3 className="text-xl font-serif font-bold text-foreground mb-4">AirQualityNearMe</h3>
          <p className="text-muted-foreground mb-4">The airquality near me tell Reatime air quality data always for you. you can also read our blogs.</p>
          <div className="flex space-x-4">
             {socialLinks.map(link => {
              const Icon = link.icon;
              return (
                <Link key={link.label} href={link.href} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
               <Icon className="h-5 w-5"/>
               <span className="sr-only">{link.label}</span>
                </Link>
              )
             })}
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map(link => (
              <li key={link.name}>
               <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors duration-300">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}

        <div>
          <h4 className="font-semibold text-foreground mb-4">Stay Updated</h4>
          <p className="text-muted-foreground mb-4">Subscribe to get latest posts delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-2">
          <Input type="email" placeholder="Your Email"/>
          <Button>Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} AirQualityNearMe • All rights reserved</p></div>
    </div>
    </footer>
}