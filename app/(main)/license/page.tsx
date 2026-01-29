import Link from "next/link";

export default function LicensePage() {
  const licenseSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Air Quality Data License and Usage Policy",
  "url": "https://airqualitynearme.org/license",
  "description": "Read about the licensing terms for using air quality data from Air Quality Near Me. Our data is provided under the Creative Commons Attribution 4.0 International License (CC BY 4.0).",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "publisher": {
    "@type": "Organization",
    "name": "Air Quality Near Me",
    "url": "https://airqualitynearme.org"
  }
};
  

  return (
    <main className="prose w-full px-4 sm:px-6 lg:px-8 py-10 mx-auto">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(licenseSchema),
        }}
      />
      <h1 className="text-3xl font-bold mb-4">
        Air Quality Data License and Usage Policy
      </h1>
      <p>
        We provide real-time air quality index (AQI) data to help individuals,
        researchers, and organizations make informed decisions. This page
        explains how our data can be used, shared, and attributed.
      </p>

      <h2 className="text-2xl font-bold mt-3 mb-4">Allowed Usage</h2>
      <ul className="list-disc p-4">
        <li>Personal, educational, and research use is allowed.</li>
        <li>
          Quote or republish small portions with clear attribution to Air
          Quality Near Me.
        </li>
        <li>Use in news, blogs, or presentations with attribution.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-3">Restricted Usage</h2>
      <ul className="list-disc p-4">
        <li>No resale or bulk redistribution without written permission.</li>
        <li>No automated scraping/bots for bulk extraction.</li>
        <li>No presenting our data as your own without attribution.</li>
      </ul>

      <h2 className="text-2xl font-bold">License</h2>
      <p>
        Our air quality data is published under the Creative Commons Attribution
        4.0 International License (CC BY 4.0).
      </p>
      <p>
        Full license text:{" "}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener"
          className="text-primary"
        >
          https://creativecommons.org/licenses/by/4.0/
        </a>
      </p>

      <h2 className="font-bold mt-2 mb-2">Attribution Example</h2>
      <blockquote className="italic">
        “Air Quality data sourced from Air Quality Near Me”
      </blockquote>

      <h2 className="text-2xl font-bold mt-3">Contact</h2>
      <p>
        You can{" "}
        <Link href="/contact-us" className="text-primary font-bold ">
          Contact us
        </Link>{" "}
        here.
      </p>
    </main>
  );
}
