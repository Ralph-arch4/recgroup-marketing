import QRCode from "qrcode";
import { writeFileSync } from "fs";

const url = "https://rec-group.vercel.app";

// High-res PNG for print (1000x1000)
await QRCode.toFile("public/qr-recgroup.png", url, {
  type: "png",
  width: 1000,
  margin: 2,
  color: {
    dark: "#1A1610",   // brand dark brown
    light: "#F5F0E8",  // brand ivory
  },
  errorCorrectionLevel: "H",
});

// White background version (for dark backgrounds)
await QRCode.toFile("public/qr-recgroup-white.png", url, {
  type: "png",
  width: 1000,
  margin: 2,
  color: {
    dark: "#F5F0E8",   // ivory (light on dark)
    light: "#00000000", // transparent background
  },
  errorCorrectionLevel: "H",
});

console.log("QR codes saved to:");
console.log("  public/qr-recgroup.png       (dark on ivory — for print/light backgrounds)");
console.log("  public/qr-recgroup-white.png (ivory on transparent — for dark backgrounds)");
