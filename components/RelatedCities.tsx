import Link from "next/link";
import { countries } from "./helpers/citiesList";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

type PlacesListProps = {
country: string; // e.g. "United States"
currentPlace: string; // e.g. "New York"
};

// Convert to slug (spaces -> dash, lowercase)
const toSlug = (str: string) =>
str.toLowerCase().trim().replace(/\s+/g, "-");

// Capitalize from slug
const formatSlug = (slug: string) =>
slug
.split("-")
.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
.join(" ");

export function RelatedCities({ country, currentPlace }: PlacesListProps) {
const normalizedCountry = toSlug(country);
const normalizedPlace = toSlug(currentPlace);

const places = countries[normalizedCountry];

if (!places) return null;

// Exclude current place
const filtered = places.filter((p) => p !== normalizedPlace);

// Pick random 10
const random10 = [...filtered].sort(() => Math.random() - 0.5).slice(0, 10);

if (random10.length === 0) return null;

return (
<div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
<h2 className="mb-4 text-2xl font-bold">
Explore Air Quality in Popular {country} Cities
</h2>

<div className="flex flex-wrap gap-3 ">
{random10.map((place) => (
<Link key={place} href={`/current-air-quality/${place}`}>
<Badge
variant="secondary"
className="cursor-pointer text-sm px-4 py-2 text-primary"
>
{formatSlug(place)}
</Badge>
</Link>
))}

<Link href={`/cities/${normalizedCountry}`}>
<Button>See All</Button>
</Link>
</div>

</div>
);
}
