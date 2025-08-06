

import CitySearch from "@/components/CitySearch";
import Showdata from "@/components/Showdata";



export default function Home() {
  return ( 
       <div className="min-h-screen bg-background">
        
        <main>
           <CitySearch/>
           <Showdata/>
        </main>
       </div>
  );
}
