import Link from "next/link";

export default function Disclaimer () {
  return <div className="p-10">
    <h1 className="text-3xl text-center font-bold font-serif p-10">Disclaimer</h1>
    <p>AirQualityNearMe provides real-time air quality data based on publicly available sources and APIs. While we strive to ensure the accuracy and reliability of the information displayed on our website, we do not guarantee that the data is always complete, error-free, or up to date at all times.</p>
    <h2 className="text-2xl font-bold font-serif pt-3">1. Informational Purpose Only</h2>
<p className="mt-3">The air quality information provided on this website is for general informational purposes only. It is not intended as medical, legal, or professional advice, nor should it be used as a substitute for advice from qualified professionals, particularly in cases involving health conditions or environmental emergencies.</p>
<h3 className="text-2xl font-bold font-serif pt-3">2. Location Accuracy</h3>
<p className="mt-3">We use geolocation services to detect your approximate location and allow manual location searches to display AQI data. However, accuracy may vary depending on your device, browser settings, or the data sources we rely upon. We are not responsible for discrepancies due to location inaccuracies or delays in data updates.</p>
<h3 className="text-2xl font-bold font-serif pt-3">3. No Warranties</h3>
<p className="mt-3">All data and services are provided as is without any warranties, express or implied, including but not limited to accuracy, reliability, or fitness for a particular purpose. Use of this website and reliance on any information is at your own risk.</p>
<h3 className="text-2xl font-bold font-serif pt-3">4. External Links</h3>
<p className="mt-3">This website may contain links to third-party websites or services for additional information or tools. We do not control, endorse, or take responsibility for the content, privacy policies, or practices of any third-party services.</p>
<h3 className="text-2xl font-bold font-serif pt-3">5. Limitation of Liability</h3>
<p className="mt-3">In no event shall [Your Site Name], its owners, developers, or affiliates be liable for any direct, indirect, incidental, or consequential damages arising out of the use or inability to use this website or the information provided.</p>
<h4 className="text-2xl font-bold font-serif pt-3">Contact</h4>
<p className="mt-3">If you have any questions regarding this disclaimer, please <Link href={"/contact-us"} className="font-bold text-primary">Contact Us </Link> here, also you can check our <Link href={"/privacy-policy"} className="font-bold text-primary">Privacy Policy</Link></p>

    </div>
}