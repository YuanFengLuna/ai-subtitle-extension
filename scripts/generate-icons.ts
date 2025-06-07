const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 48, 128];
const svgPath = path.resolve(__dirname, '../public/icons/icon.svg');
const outputDir = path.resolve(__dirname, '../public/icons');

async function generateIcons() {
  const svgBuffer = fs.readFileSync(svgPath);
  
  for (const size of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(outputDir, `icon${size}.png`));
    
    console.log(`Generated icon${size}.png`);
  }
}

generateIcons().catch(console.error); 