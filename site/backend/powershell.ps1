# Root path
$basePath = "src\bLove\cUtility"

# eLoggerUtility.ts content
$loggerUtilityCode = @'
import { createLogger, format, transports } from "winston";


// Custom format for console logging with colors
const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message, timestamp }) => {
    return `${level}: ${message}`;
  })
);

// Create a Winston logger
const loggerUtility = createLogger({
  level: "info",
  format: format.combine(format.colorize(), format.timestamp(), format.json()),
  transports: [
    new transports.Console({ format: consoleLogFormat }),
    new transports.File({ filename: "appConnection.log" }),
  ],
});

export default loggerUtility;
'@

# fGetLoactionFromIPUtility.ts content
$getLocationCode = @'
import geoip from "geoip-lite";


const getLocationFromIPUtility = (ip: any) => {
  if (!ip || ip.startsWith("127.") || ip.startsWith("192.168.") || ip.startsWith("10.") || ip.startsWith("::1")) {
    return { country: "Local Network", city: "Unknown" };
  }
  
  const geo = geoip.lookup(ip);
  return geo ? { city: geo.city, country: geo.country } : { city: "Unknown", country: "Unknown" };
};

export default getLocationFromIPUtility;
'@

# Write to files
Set-Content -Path (Join-Path $basePath "dLoggerUtility.ts") -Value $loggerUtilityCode -Force
Set-Content -Path (Join-Path $basePath "eGetLoactionFromIPUtility.ts") -Value $getLocationCode -Force

Write-Host "✅ Added code to eLoggerUtility.ts and fGetLoactionFromIPUtility.ts"

# powershell -ExecutionPolicy Bypass -File .\powershell.ps1
