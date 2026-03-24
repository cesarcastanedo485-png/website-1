import sharp from "sharp";

const width = 1200;
const height = 630;

const inputLogo = "public/og-image.png";
const outputImage = "public/og-social-1200x630.png";

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

await sharp(background)
  .composite([
    {
      input: logoBuffer,
      gravity: "center",
    },
  ])
  .png({ compressionLevel: 9 })
  .toFile(outputImage);

console.log(`Generated ${outputImage}`);
