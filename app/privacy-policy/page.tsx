import Link from "next/link";

export default function PrivacyPolicy () {

  return <div className="p-10"><h1 className="text-3xl text-center font-bold font-serif p-10">Privacy Policy</h1>
    <p>AirQualityNearMe is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit or interact with our website.</p>
    <h2 className="text-2xl font-bold font-serif mt-4" >1. Information We Collect</h2>
    <p className="mt-3">We collect the following types of information:</p>
    <h3 className="text-2xl font-bold font-serif mt-4">a. Location Data</h3>
    <ul className="list-disc ml-5 mt-3">
      <li>If you allow location access via your browser, we use geolocation of your device to show real-time AQI data for your current area.</li>
      <li>If you choose to manually search for a location, we collect the name of the city, town, or area you enter in the search bar.</li>
    </ul>
    <p><strong>Note :</strong> We do not store your precise location or any historical location data.</p>
    <h3 className="text-2xl font-bold font-serif mt-4">b. Usage Data</h3>
    <p className="mt-3">We may collect non-personal usage data to improve the functionality of our website, such as:</p>
    <ul className="list-disc ml-5 mt-3">
      <li>Pages visited</li>
      <li>Time spent on site</li>
      <li>Type of device and browser</li>
      <li>Referring website</li>
    </ul>
    <p className="mt-3">This information is collected through analytics tools and is not linked to your personal identity.</p>
    <h3 className="text-2xl font-bold font-serif mt-3">2. How We Use Your Information</h3>
    <p className="mt-3">We use the collected data solely to:</p>
    <ul className="list-disc ml-5 mt-3">
      
      <li>Improve user experience and site performance</li>
      <li>Monitor and enhance website security and functionality</li>
    </ul>
    <h3 className="text-2xl font-bold font-serif mt-3">3. Cookies and Tracking Technologies</h3>
    <p className="mt-3">We may use cookies or similar technologies to:</p>
    <ul className="list-disc ml-5 mt-3">
      <li>Remember user preferences (e.g., last searched location)</li>
      <li>Enhance website speed and performance</li>
    </ul>
    <p className="mt-3">You can control or disable cookies through your browser settings. However, doing so may affect the functionality of some parts of the site.</p>
    <h3 className="text-2xl font-bold font-serif mt-3">4. Third-Party Services</h3>
    <p className="mt-3">We may use third-party services (such as geolocation APIs or analytics tools) that collect limited information as needed to provide our services. These third parties are bound by their own privacy policies.</p>
    <p className="mt-3">We do not sell, trade, or rent your personal information to any third parties.</p>
    <h3 className="text-2xl font-bold font-serif mt-3">5. Data Security</h3>
    <p className="mt-3">We take reasonable steps to protect your data against unauthorized access, loss, or misuse. However, no system can be completely secure, so we cannot guarantee absolute security.</p>
    <h3 className="text-2xl font-bold font-serif mt-3">6. Children’s Privacy</h3>
    <p className="mt-3">Our website is not intended for use by children under the age of 13. We do not knowingly collect personal data from children.</p>
    <h3 className="text-2xl font-bold font-serif mt-3">7. Changes to This Privacy Policy</h3>
    <p className="mt-3">We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date. We recommend reviewing this page periodically.</p>
    <h3 className="text-2xl font-bold font-serif mt-3">8. Contact Us</h3>
    <p className="mt-3">If you have any questions or concerns about this Privacy Policy, please <Link href={"/contact-us" } className="font-bold text-primary">Contact Us</Link> here</p>

    
    



    
    
    </div>
}
