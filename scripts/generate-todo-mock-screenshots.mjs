import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'portfolio', 'todo-tasks');

const tailwind = `<script src="https://cdn.tailwindcss.com"></script>`;

const screens = {
  '02-uzduociu-lenta': `<!DOCTYPE html><html><head><meta charset="utf-8"/>${tailwind}</head>
<body class="min-h-screen bg-white">
<header class="border-b"><div class="container mx-auto px-4 py-6 flex items-center justify-between max-w-7xl">
<h1 class="text-3xl font-bold">Mano užduotys</h1>
<div class="flex items-center gap-3"><span class="text-sm text-gray-500">Sveikas, Jonas Petraitis!</span>
<button class="text-sm underline">Atsijungti</button></div></div></header>
<main class="p-4 max-w-7xl mx-auto">
<div class="flex items-center justify-between mb-4"><h2 class="text-xl font-semibold">Lenta</h2>
<button class="bg-green-500 text-white px-3 py-2 rounded text-sm">Pridėti stulpelį</button></div>
<div class="flex gap-4 overflow-x-auto pb-4">
<div class="w-80 rounded-xl bg-gray-50 p-4 flex flex-col gap-4 shrink-0">
<div class="flex justify-between items-center"><h2 class="font-semibold text-lg">Planuojama (2)</h2></div>
<div class="bg-white p-4 rounded-lg shadow"><h3 class="font-medium">Paruošti medžiagų sąrašą</h3></div>
<div class="bg-white p-4 rounded-lg shadow"><h3 class="font-medium">Suderinti terminą su klientu</h3></div>
<button class="text-sm text-green-600 font-medium">+ Pridėti užduotį</button></div>
<div class="w-80 rounded-xl bg-gray-50 p-4 flex flex-col gap-4 shrink-0">
<div class="flex justify-between items-center"><h2 class="font-semibold text-lg">Vykdoma (3)</h2></div>
<div class="bg-white p-4 rounded-lg shadow"><h3 class="font-medium">Montuoti konstrukciją</h3></div>
<div class="bg-white p-4 rounded-lg shadow"><h3 class="font-medium">Fotografuoti defektus</h3></div>
<div class="bg-white p-4 rounded-lg shadow opacity-50 line-through"><h3 class="font-medium">Patikrinti matmenis</h3></div>
<button class="text-sm text-green-600 font-medium">+ Pridėti užduotį</button></div>
<div class="w-80 rounded-xl bg-gray-50 p-4 flex flex-col gap-4 shrink-0">
<div class="flex justify-between items-center"><h2 class="font-semibold text-lg">Atlikta (1)</h2></div>
<div class="bg-white p-4 rounded-lg shadow opacity-50 line-through"><h3 class="font-medium">Pristatyti ataskaitą</h3></div>
<button class="text-sm text-green-600 font-medium">+ Pridėti užduotį</button></div>
</div></main></body></html>`,

  '03-uzduoties-langas': `<!DOCTYPE html><html><head><meta charset="utf-8"/>${tailwind}</head>
<body class="min-h-screen bg-black/50 flex items-start justify-center p-4">
<div class="bg-white rounded-lg shadow-xl w-full max-w-3xl my-8 p-6">
<div class="flex justify-between items-start mb-4"><h2 class="text-2xl font-bold">Fotografuoti defektus</h2>
<div class="flex gap-2"><button class="text-gray-500 px-2">✎</button><button class="text-gray-500 px-2">✕</button></div></div>
<div class="mb-4"><label class="text-sm font-medium text-gray-700">Būsena</label>
<select class="mt-1 w-full border rounded-lg px-3 py-2"><option>Vykdoma</option><option>Atlikta</option></select></div>
<p class="text-gray-600 mb-4">Užfiksuoti objekto defektus ir įkelti nuotraukas į užduotį. Eksportuoti į Excel.</p>
<div class="grid grid-cols-3 gap-3 mb-6">
<div class="aspect-square bg-gray-100 rounded-lg border flex items-center justify-center text-xs text-gray-400">Nuotrauka 1</div>
<div class="aspect-square bg-gray-100 rounded-lg border flex items-center justify-center text-xs text-gray-400">Nuotrauka 2</div>
<div class="aspect-square bg-dashed border-2 border-gray-300 rounded-lg flex items-center justify-center text-sm text-gray-500">+ Įkelti</div>
</div>
<div class="border-t pt-4"><h3 class="font-semibold mb-2">Komentarai</h3>
<div class="bg-gray-50 rounded-lg p-3 text-sm mb-2">Defektas prie kairio kampo – reikia papildomo sandariklio.</div>
<input class="w-full border rounded-lg px-3 py-2 text-sm" placeholder="Rašyti komentarą..." /></div>
<button class="mt-4 w-full bg-green-600 text-white py-2 rounded-lg font-medium">Eksportuoti į Excel</button>
</div></body></html>`,

  '04-administravimas': `<!DOCTYPE html><html><head><meta charset="utf-8"/>${tailwind}</head>
<body class="min-h-screen bg-slate-50 px-4 py-10">
<div class="mx-auto w-full max-w-5xl flex flex-col gap-8">
<a class="inline-flex items-center rounded-md bg-orange-500 px-3 py-1 text-sm font-medium text-white w-fit">Atgal</a>
<header><h1 class="text-2xl font-semibold text-slate-900">Admin: vartotojai</h1>
<p class="text-sm text-slate-600">Kurkite darbuotojų paskyras ir tvarkykite slaptažodžius.</p></header>
<section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<h2 class="text-lg font-semibold">Naujas vartotojas</h2>
<div class="mt-4 grid gap-4 md:grid-cols-2">
<label class="flex flex-col gap-2 text-sm"><span>El. paštas</span><input class="rounded-lg border px-3 py-2" value="darbuotojas@imone.lt"/></label>
<label class="flex flex-col gap-2 text-sm"><span>Vardas</span><input class="rounded-lg border px-3 py-2" value="Jonas"/></label>
<label class="flex flex-col gap-2 text-sm"><span>Pavardė</span><input class="rounded-lg border px-3 py-2" value="Petraitis"/></label>
<label class="flex flex-col gap-2 text-sm"><span>Slaptažodis</span><input class="rounded-lg border px-3 py-2" type="password" value="••••••••"/></label>
</div>
<button class="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Sukurti vartotoją</button>
</section>
<section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<h2 class="text-lg font-semibold">Esami vartotojai</h2>
<div class="mt-4 space-y-4">
<div class="rounded-xl border bg-slate-50 p-4 flex justify-between"><div><div class="font-semibold text-sm">admin@imone.lt</div><div class="text-xs text-slate-600">Administratorius</div></div><span class="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">ADMIN</span></div>
<div class="rounded-xl border bg-slate-50 p-4 flex justify-between"><div><div class="font-semibold text-sm">jonas@imone.lt</div><div class="text-xs text-slate-600">Jonas Petraitis</div></div><span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">EMPLOYEE</span></div>
</div></section></div></body></html>`,

  '05-eksportas-excel': `<!DOCTYPE html><html><head><meta charset="utf-8"/>${tailwind}</head>
<body class="min-h-screen bg-black/50 flex items-center justify-center p-4">
<div class="bg-white rounded-lg shadow-xl w-full max-w-3xl p-6">
<h2 class="text-2xl font-bold mb-2">Fotografuoti defektus</h2>
<p class="text-gray-600 mb-4">Užduotis su nuotraukomis ir komentarais – paruošta eksportui į Excel.</p>
<div class="rounded-lg border border-green-200 bg-green-50 p-4 text-green-800 text-sm mb-4">✓ Eksportas baigtas – failas su nuotraukomis, komentarais ir defektų lentele.</div>
<div class="grid grid-cols-4 gap-2 mb-4">
<div class="aspect-square bg-gray-200 rounded"></div><div class="aspect-square bg-gray-200 rounded"></div>
<div class="aspect-square bg-gray-200 rounded"></div><div class="aspect-square bg-gray-200 rounded"></div>
</div>
<button class="w-full bg-green-600 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2">⬇ Eksportuoti į Excel</button>
</div></body></html>`,
};

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  for (const [name, html] of Object.entries(screens)) {
    await page.setContent(html, { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);
    const file = path.join(outDir, `${name}.png`);
    await page.screenshot({ path: file });
    console.log(`Saved ${file}`);
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
