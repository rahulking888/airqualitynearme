import { countries } from "@/components/helpers/citiesList";
import Link from "next/link";
import { title } from "process";



export async function generateMetadata( ) {

  const siteURL = "https://airqualitynearme.org";

return {
  title:"Air Quality in United States Cities | Current AQI & Pollution Levels",
  description: "Check the current air quality index (AQI), PM2.5, temperature, and wind conditions in all cities across the United States.",
  alternates: {
      canonical: `${siteURL}/cities/united-states`,
    },
}
}







export default function UnitedStatesCitiesPage() {
const countrySlug = "united-states"; // Country ka slug
const cities = countries[countrySlug] || [];

if (!cities.length) {
return <h1>No cities found for United States</h1>;
}

// Slug ko readable city name me convert karne ka helper
const formatCityName = (slug: string) =>
slug
.split("-")
.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
.join(" ");

//Schema  section start
const unitedStatesSchema = {
"@context": "https://schema.org",
"@graph": [
// Breadcrumb schema
{
"@type": "BreadcrumbList",
"itemListElement": [
{
"@type": "ListItem",
position: 1,
name: "Home",
item: "https://www.airqualitynearme.org/",
},
{
"@type": "ListItem",
position: 2,
name: "Cities",
item: "https://www.airqualitynearme.org/cities",
},
{
"@type": "ListItem",
position: 3,
name: "United States",
item: `https://www.airqualitynearme.org/cities/${countrySlug}`,
},
],
},
// ItemList schema for cities
{
"@type": "ItemList",
name: "United States Cities Air Quality",
itemListElement: cities.map((slug, index) => ({
"@type": "ListItem",
position: index + 1,
name: slug
.split("-")
.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
.join(" "),
url: `https://www.airqualitynearme.org/current-air-quality/${slug}`,
})),
},
],
};

return (
<main style={{ padding: "2rem" }}>
  <script
type="application/ld+json"
dangerouslySetInnerHTML={{ __html: JSON.stringify(unitedStatesSchema) }}
/>

<h1 className="text-3xl font-bold text-center py-5">Air Quality in United States Cities</h1>
<ul className="text-center text-primary">
{cities.map((slug) => (
<li key={slug} style={{ marginBottom: "0.5rem" }}>
<Link href={`/current-air-quality/${slug}`}>



{formatCityName(slug)}
</Link>
</li>
))}
</ul>
</main>
);
}