const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');
const sharp = require('sharp');

(async () => {
  const pdfPath = path.join(__dirname, '..', 'exams', '68회 한국사_문제지(심화).pdf');
  const buf = fs.readFileSync(pdfPath);
  const parser = new PDFParse({ data: buf });
  // try text first
  const r = await parser.getText();
  fs.writeFileSync(path.join(__dirname, '..', 'exams', '68sim.txt'), r.text);
  console.log('text len:', r.text.length);
  if (r.text.length < 5000) {
    console.log('text too short - rendering screenshots');
    const ss = await parser.getScreenshot({ scale: 3 });
    for (let i = 0; i < ss.pages.length; i++) {
      const img = sharp(ss.pages[i].data);
      const meta = await img.metadata();
      const halfW = Math.floor(meta.width / 2);
      const halfH = Math.floor(meta.height / 2);
      const quads = [
        [0, 0, halfW, halfH, 'tl'],
        [halfW, 0, meta.width - halfW, halfH, 'tr'],
        [0, halfH, halfW, meta.height - halfH, 'bl'],
        [halfW, halfH, meta.width - halfW, meta.height - halfH, 'br'],
      ];
      for (const [l, t, w, h, name] of quads) {
        const out = path.join(__dirname, '..', 'exams', `68s_p${i+1}_${name}.png`);
        await sharp(ss.pages[i].data).extract({ left: l, top: t, width: w, height: h }).toFile(out);
      }
      console.log('page', i+1, 'done');
    }
  }
})();
