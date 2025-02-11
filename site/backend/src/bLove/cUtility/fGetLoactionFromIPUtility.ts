import geoip from "geoip-lite";


const getLocationFromIPUtility = (ip: any) => {
  if (!ip || ip.startsWith("127.") || ip.startsWith("192.168.") || ip.startsWith("10.") || ip.startsWith("::1")) {
    return { country: "Local Network", city: "Unknown" };
  }
  
  const geo = geoip.lookup(ip);
  return geo ? { city: geo.city, country: geo.country } : { city: "Unknown", country: "Unknown" };
};

export default getLocationFromIPUtility;
