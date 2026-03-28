import sharp from "sharp";

const width = 1200;
const height = 630;

const inputLogo = "public/og-image.png";
const outputPng = "public/og-social-1200x630.png";
const outputJpg = "public/og-social-1200x630.jpg";

const background = {
  create: {
    width,
    height,
    channels: 4,
    background: { r: 26, g: 27, b: 46, alpha: 1 },
  },
};

const logoBuffer = await sharp(inputLogo)
  .resize(520, 520, { fit: "inside", withoutEnlargement: false })
  .png()
  .toBuffer();

const canvas = sharp(background).composite([
  {
    input: logoBuffer,
    gravity: "center",
  },
]);

await canvas
  .clone()
  .png({ compressionLevel: 9 })
  .toFile(outputPng);

await canvas
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(outputJpg);

console.log(`Generated ${outputPng}`);
console.log(`Generated ${outputJpg}`);
