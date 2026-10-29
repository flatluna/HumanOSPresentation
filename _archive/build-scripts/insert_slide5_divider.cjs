const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'slides.js');
let content = fs.readFileSync(filePath, 'utf8');

// Extract the array literal
const jsonStr = content.replace('export const initialSlides = ', '').replace(/;\s*$/, '');
const slides = JSON.parse(jsonStr);

// Shift ids 5-17 -> 6-18
const newSlides = slides.map(s => {
  if (s.id >= 5) {
    return { ...s, id: s.id + 1 };
  }
  return s;
});

// Insert new divider slide as id 5, right after id 4
const dividerSlide = {
  id: 5,
  title: "Section Break: Product Details",
  category: "Section Break",
  headline: "Now, Let's Go Under the Hood",
  subhead: "Product Details",
  oneLiner: "The following slides walk through exactly how Human OS is built — the product, the pedagogy, and the technology.",
  speakerNotes: [
    {
      tag: "Transition",
      text: "\"That completes our executive summary: the problem, what we have, our differentiator, and the impact. Now let's go deeper into exactly how the product works.\""
    }
  ]
};

const insertIndex = newSlides.findIndex(s => s.id === 6);
newSlides.splice(insertIndex, 0, dividerSlide);

const output = `export const initialSlides = ${JSON.stringify(newSlides, null, 2)};\n`;
fs.writeFileSync(filePath, output);
console.log('Inserted divider slide as id 5, shifted ids 5-17 to 6-18. Total slides:', newSlides.length);
