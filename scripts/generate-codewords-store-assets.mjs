import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const rawDir = process.argv[2];
const outputRoot = process.argv[3] ?? path.resolve("public/store-assets/codewords");
const iconPath = process.argv[4] ?? path.resolve("../Certifyd/react/assets/images/icon.png");

if (!rawDir) {
  throw new Error(
    "Usage: node scripts/generate-codewords-store-assets.mjs <raw-screenshot-dir> [output-dir] [icon-path]",
  );
}

const screens = [
  ["01-home.png", "Check before you act"],
  ["02-direct-setup.png", "Add trust side by side"],
  ["03-trusted-people.png", "See your trusted people"],
  ["04-exact-request.png", "Challenge the exact request"],
  ["05-incoming-challenge.png", "Confirm, deny or report pressure"],
  ["06-confirmed-result.png", "See what the trusted phone approved"],
  ["07-activity.png", "Keep a clear challenge history"],
];

const appleDir = path.join(outputRoot, "apple-iphone-69");
const googleDir = path.join(outputRoot, "google-phone");
await fs.mkdir(appleDir, { recursive: true });
await fs.mkdir(googleDir, { recursive: true });

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function headingSvg(width, height, title, fontSize, x, baseline) {
  return Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <text x="${x}" y="${baseline}" fill="#ffffff" font-family="Arial, Helvetica, sans-serif"
        font-size="${fontSize}" font-weight="700" letter-spacing="-1">${escapeXml(title)}</text>
    </svg>
  `);
}

for (const [index, [filename, title]] of screens.entries()) {
  const source = path.join(rawDir, filename);
  const prefix = String(index + 1).padStart(2, "0");

  const applePhone = await sharp(source)
    .resize({ width: 1130 })
    .png()
    .toBuffer();
  const appleIcon = await sharp(iconPath).resize(68, 68).png().toBuffer();
  await sharp({
    create: { width: 1320, height: 2868, channels: 4, background: "#07152f" },
  })
    .composite([
      { input: appleIcon, left: 94, top: 48 },
      { input: headingSvg(1320, 280, title, 62, 94, 212), left: 0, top: 0 },
      { input: applePhone, left: 95, top: 320 },
    ])
    .removeAlpha()
    .png()
    .toFile(path.join(appleDir, `${prefix}-${filename}`));

  const googlePhone = await sharp(source)
    .resize({ width: 750 })
    .png()
    .toBuffer();
  const googleIcon = await sharp(iconPath).resize(52, 52).png().toBuffer();
  await sharp({
    create: { width: 1080, height: 1920, channels: 4, background: "#07152f" },
  })
    .composite([
      { input: googleIcon, left: 70, top: 42 },
      { input: headingSvg(1080, 210, title, 40, 70, 164), left: 0, top: 0 },
      { input: googlePhone, left: 165, top: 242 },
    ])
    .removeAlpha()
    .png()
    .toFile(path.join(googleDir, `${prefix}-${filename}`));
}

const featureIcon = await sharp(iconPath).resize(188, 188).png().toBuffer();
const featureText = Buffer.from(`
  <svg width="1024" height="500" xmlns="http://www.w3.org/2000/svg">
    <text x="304" y="215" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="56" font-weight="700">Meet once.</text>
    <text x="304" y="282" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="56" font-weight="700">Check any time.</text>
    <text x="304" y="339" fill="#aebbd1" font-family="Arial, Helvetica, sans-serif" font-size="25">Certifyd CodeWords</text>
  </svg>
`);
await sharp({
  create: { width: 1024, height: 500, channels: 4, background: "#07152f" },
})
  .composite([
    { input: featureIcon, left: 72, top: 156 },
    { input: featureText, left: 0, top: 0 },
  ])
  .removeAlpha()
  .png()
  .toFile(path.join(outputRoot, "google-feature-graphic-1024x500.png"));

await sharp(iconPath).resize(512, 512).png().toFile(path.join(outputRoot, "google-app-icon-512.png"));
await sharp(iconPath).resize(1024, 1024).png().toFile(path.join(outputRoot, "apple-app-icon-1024.png"));

console.log(`Generated ${screens.length} Apple screenshots, ${screens.length} Google screenshots and store artwork in ${outputRoot}`);
