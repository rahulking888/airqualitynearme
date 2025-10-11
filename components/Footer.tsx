import Link from "next/link";

const quickLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "License", href: "/license" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6">
      {/* Quick Links Row */}
      <div className="flex flex-wrap justify-center gap-4 mb-4 px-4 text-sm">
        {quickLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="hover:text-gray-300 transition"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-center text-xs sm:text-sm text-white">
        © {new Date().getFullYear()} Air Quality Near Me. All rights reserved.
      </div>
    </footer>
  );
}
