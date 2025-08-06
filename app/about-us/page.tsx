import Link from "next/link";

export default function AboutPage () {
  return <div className="p-10">
    <h1 className="text-3xl text-center font-bold font-serif p-10">About Us</h1>
    <p>At AirQualityNearMe, we believe that access to clean air is a basic right — and understanding the quality of the air you breathe should not be complicated. </p>

<p>Our platform provides real-time Air Quality Index (AQI) information based on the U.S. Environmental Protection Agency (EPA) standards, giving you accurate, easy-to-understand data no matter where you are. Whether you are commuting, exercising, managing a respiratory condition, or simply staying informed, our goal is to help you make better decisions for your health and well-being.</p>
<h2 className="text-2xl font-bold font-serif pt-3">How it works:</h2>
<p className="pt-2 pb-1">We offer <strong>two easy ways</strong> to check air quality :</p>
<ul className="list-disc ml-5 mt-1 mb-2">
  <li>
  <p><strong>Automatic Location Detection: </strong> Our site can instantly detect your current location using permissions of your browser, and show you real-time AQI data for that area.</p>
  </li>
  <li>
    <p> <strong>Manual Location Search:</strong> Want to check the air quality in another city, town, or region? Just type it into the search bar, and we will bring you the latest AQI data for that location too.</p>
  </li>
</ul>
<h3 className="text-2xl font-bold font-serif mt-2 mb-2">Why it matters:</h3>
<p>Air quality can change rapidly due to weather, traffic, wildfires, industrial activity, and more. Even short-term exposure to poor air can affect your health — especially for children, elderly individuals, and those with heart or lung conditions. That’s why we not only display AQI numbers but also provide color-coded indicators, health recommendations, and pollutant breakdowns to help you understand what the numbers mean.</p>
<h3 className="text-2xl font-bold font-serif mt-2 mb-2">Our Mission:</h3>
<p>Our mission is simple — to empower people with timely, trustworthy, and actionable air quality information, so they can breathe a little easier every day. Whether you are at home or on the move, AirQualityNearMe is here to help you stay one step ahead of the air you breathe.</p>
<p>You can <Link href={"/contact-us"} className="text-primary hover:text-foreground transition-colors duration-300"> Contact Us</Link> here.</p>


  </div>
}