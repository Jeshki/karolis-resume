/**
 * Run from to-do-tasks repo with DB + dev server, or set PLAYWRIGHT_BASE_URL to production.
 * Example:
 *   PLAYWRIGHT_BASE_URL=https://to-do-tasks-livid.vercel.app \
 *   E2E_ADMIN_EMAIL=... E2E_ADMIN_PASSWORD=... \
 *   node ../karolis-resume-main/scripts/capture-todo-screenshots.mjs
 */
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'portfolio', 'todo-tasks');

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:3000';
const adminEmail = process.env.E2E_ADMIN_EMAIL;
const adminPassword = process.env.E2E_ADMIN_PASSWORD;
const employeeEmail = process.env.E2E_EMPLOYEE_EMAIL;
const employeePassword = process.env.E2E_EMPLOYEE_PASSWORD;

async function login(page, email, password) {
  await page.goto(`${baseURL}/signin`, { waitUntil: 'networkidle' });
  await page.getByTestId('signin-email').fill(email);
  await page.getByTestId('signin-password').fill(password);
  await page.getByTestId('signin-submit').click();
  await page.getByTestId('signout-button').waitFor({ timeout: 60_000 });
  await page.getByTestId('home-title').waitFor({ timeout: 60_000 });
}

async function seedBoard(page) {
  await page.waitForFunction(() => typeof globalThis.__e2eCreateCategory === 'function');
  const unique = Date.now();
  const categoryTitle = `Demo kategorija ${unique}`;
  const taskTitle = `Demo užduotis ${unique}`;
  await page.evaluate((title) => globalThis.__e2eCreateCategory?.(title), categoryTitle);
  const column = page.getByTestId('category-column').filter({ hasText: categoryTitle }).first();
  await column.waitFor({ timeout: 60_000 });
  await column.getByTestId('add-task').click();
  await column.getByTestId('task-title-input').fill(taskTitle);
  await column.getByTestId('task-submit').click();
  await column.locator('[data-testid="task-item"]').filter({ hasText: taskTitle }).first().waitFor({
    timeout: 60_000,
  });
  return { categoryTitle, taskTitle };
}

async function capture(name, page, selector = 'body') {
  const file = path.join(outDir, `${name}.png`);
  const el = selector === 'body' ? page : page.locator(selector).first();
  await el.screenshot({ path: file });
  console.log(`Saved ${file}`);
}

async function main() {
  if (!employeeEmail || !employeePassword) {
    console.error('Set E2E_EMPLOYEE_EMAIL and E2E_EMPLOYEE_PASSWORD');
    process.exit(1);
  }

  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  await page.goto(`${baseURL}/signin`, { waitUntil: 'networkidle' });
  await capture('01-prisijungimas', page);

  await login(page, employeeEmail, employeePassword);
  await capture('02-uzduociu-lenta', page);

  const { taskTitle } = await seedBoard(page);
  await page.waitForTimeout(800);
  await capture('03-lenta-su-uzduotimis', page);

  const taskCard = page.getByTestId('task-item').filter({ hasText: taskTitle }).first();
  await taskCard.click({ force: true });
  await page.getByTestId('task-export').waitFor({ timeout: 30_000 });
  await page.waitForTimeout(500);
  await capture('04-uzduoties-details', page);

  if (adminEmail && adminPassword) {
    await page.getByTestId('signout-button').click();
    await page.getByTestId('signin-email').waitFor({ timeout: 60_000 });
    await login(page, adminEmail, adminPassword);
    await page.goto(`${baseURL}/admin`, { waitUntil: 'networkidle' });
    await page.getByTestId('admin-create-email').waitFor({ timeout: 30_000 });
    await capture('05-administravimas', page);
  }

  await browser.close();
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
