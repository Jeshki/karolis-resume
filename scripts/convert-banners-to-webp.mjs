/**
 * Konvertuoja visus banerius ir posterius į WebP (geresnė kokybė / mažesnis dydis).
 *
 * Naudojimas:
 *   npm run optimize:banners
 *   node scripts/convert-banners-to-webp.mjs --quality 92
 *   node scripts/convert-banners-to-webp.mjs --max-width 1920
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const INPUT_DIRS = [
  path.join(root, 'src', 'designs', 'baners'),
  path.join(root, 'public', 'designs', 'posteriai'),
];

const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

function parseArgs() {
  const args = process.argv.slice(2);
  let quality = 100;
  let maxWidth = 1920;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--quality' && args[i + 1]) {
      quality = Number(args[++i]);
    } else if (args[i] === '--max-width' && args[i + 1]) {
      maxWidth = Number(args[++i]);
    }
  }

  return { quality, maxWidth };
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function convertFile(filePath, { quality, maxWidth }) {
  const ext = path.extname(filePath).toLowerCase();
  if (!EXTENSIONS.has(ext) || ext === '.webp') {
    return null;
  }

  const outPath = filePath.replace(/\.(jpe?g|png)$/i, '.webp');
  const inputStats = fs.statSync(filePath);

  let pipeline = sharp(filePath).rotate();

  const meta = await pipeline.metadata();
  if (meta.width && meta.width > maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }

  await pipeline
    .webp({
      quality,
      effort: 6,
      smartSubsample: true,
    })
    .toFile(outPath);

  const outputStats = fs.statSync(outPath);
  const saved = inputStats.size - outputStats.size;
  const savedPct = ((saved / inputStats.size) * 100).toFixed(1);

  return {
    input: path.relative(root, filePath),
    output: path.relative(root, outPath),
    before: inputStats.size,
    after: outputStats.size,
    saved,
    savedPct,
  };
}

async function main() {
  const options = parseArgs();
  const results = [];

  for (const dir of INPUT_DIRS) {
    if (!fs.existsSync(dir)) {
      console.warn(`⚠ Praleista (nėra aplanko): ${path.relative(root, dir)}`);
      continue;
    }

    const files = fs
      .readdirSync(dir)
      .filter((name) => /\.(jpe?g|png)$/i.test(name))
      .map((name) => path.join(dir, name));

    for (const file of files) {
      const result = await convertFile(file, options);
      if (result) results.push(result);
    }
  }

  if (!results.length) {
    console.log('Nerasta failų konvertavimui.');
    return;
  }

  console.log(`\n✓ Konvertuota ${results.length} failų (quality=${options.quality}, maxWidth=${options.maxWidth})\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const r of results) {
    totalBefore += r.before;
    totalAfter += r.after;
    const sign = r.saved >= 0 ? '−' : '+';
    console.log(
      `${r.input}\n  → ${r.output}\n  ${formatBytes(r.before)} → ${formatBytes(r.after)} (${sign}${Math.abs(Number(r.savedPct))}%)\n`,
    );
  }

  const totalSaved = totalBefore - totalAfter;
  const totalPct = ((totalSaved / totalBefore) * 100).toFixed(1);
  console.log(
    `Iš viso: ${formatBytes(totalBefore)} → ${formatBytes(totalAfter)} (sutaupyta ${formatBytes(totalSaved)}, ${totalPct}%)\n`,
  );
  console.log('Svetainė naudoja .webp failus iš PortfolioSection.tsx importų.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
