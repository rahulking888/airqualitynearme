import { navItems } from "@/lib/constants";
import Link from "next/link";
import MobileNavigation from "./MobileNavigation";

export default function ToolsNav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top row */}
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center py-3 md:h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link href={"/"}>
              <p className="text-xl font-serif font-bold text-foreground">
                <span className="text-primary">AirQuality</span>
                <span className="text-destructive">NearMe</span>
              </p>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-primary hover:text-destructive transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center ml-auto">
            <MobileNavigation />
          </div>
        </div>

      </div>
    </nav>
  );
}
