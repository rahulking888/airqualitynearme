 function AqiStatus(aqi: number) {
    if (aqi <= 50) return {condition:"Good", fore:"#00e400", ic:"1a"};
    if (aqi <= 100) return {condition:"Moderate", fore:"#ffce1b", ic:"2a"};
    if (aqi <= 150) return {condition:"Poor", fore:"#ff7e00", ic:"3a"};
    if (aqi <= 200) return {condition:"Unhealthy", fore:"#ff0000", ic:"4a"};
    if (aqi <= 300) return {condition:"Severe", fore:"#8f3f97", ic:"5a"};
    return {condition:"Hazardous", fore:"#8f3f97", ic:"6a"};
  }
  export default AqiStatus;

  