const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');
const sharp = require('sharp');

(async () => {
  const pdfPath = path.join(__dirname, '..', 'exams', '64회 한국사_문제지(기본).pdf');
  const buf = fs.readFileSync(pdfPath);
  const parser = new PDFParse({ data: buf });
  const r = await parser.getText();
  console.log('text len:', r.text.length);
  if (r.text.length < 5000) {
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
        await sharp(ss.pages[i].data).extract({ left: l, top: t, width: w, height: h })
          .toFile(path.join(__dirname, '..', 'exams', `64b_p${i+1}_${name}.png`));
      }
      console.log('page', i+1, 'done');
    }
  }
})();
