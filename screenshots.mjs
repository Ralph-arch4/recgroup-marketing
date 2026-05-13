import { chromium } from "@playwright/test";
import { mkdirSync } from "fs";

const BASE_URL = process.env.SITE_URL ?? "https://rec-group.vercel.app";

mkdirSync("screenshots", { recursive: true });

async function runViewport(browser, width, height, suffix = "") {
  const ctx = await browser.newContext({ viewport: { width, height } });
  const page = await ctx.newPage();

  const shot = async (name, scrollY = 0) => {
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), scrollY);
    await page.waitForTimeout(700);
    await page.screenshot({ path: `screenshots/${name}`, fullPage: false });
    console.log(`  ✓ ${name}`);
  };

  await page.goto(BASE_URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);

  const sectionTop = async (id) => {
    const el = await page.$(`#${id}`);
    if (!el) return null;
    return await el.evaluate((el) => el.getBoundingClientRect().top + window.scrollY);
  };

  await shot(`01-hero${suffix}.png`, 0);

  const manifY   = await sectionTop("manifesto");
  const risultY  = await sectionTop("risultati");
  const servY    = await sectionTop("servizi");
  const portY    = await sectionTop("portfolio");
  const packY    = await sectionTop("pacchetti");
  const teamY    = await sectionTop("team");
  const faqY     = await sectionTop("faq");
  const ctaY     = await sectionTop("contatti");

  await shot(`02-manifesto${suffix}.png`,  manifY  ? manifY  - 60 : 900);
  await shot(`03-risultati${suffix}.png`,  risultY ? risultY - 60 : 1600);
  await shot(`04-servizi${suffix}.png`,    servY   ? servY   - 60 : 2400);
  await shot(`05-portfolio${suffix}.png`,  portY   ? portY   - 60 : 3400);
  await shot(`06-pacchetti${suffix}.png`,  packY   ? packY   - 60 : 4400);
  await shot(`07-team${suffix}.png`,       teamY   ? teamY   - 60 : 5200);
  await shot(`08-faq${suffix}.png`,        faqY    ? faqY    - 60 : 5900);
  await shot(`09-contatti${suffix}.png`,   ctaY    ? ctaY    - 60 : 6600);

  await ctx.close();
}

const browser = await chromium.launch();

console.log(`\nCapturing screenshots from ${BASE_URL}\n`);

console.log("Desktop (1440×900):");
await runViewport(browser, 1440, 900, "");

console.log("\nMobile (390×844 — iPhone 14):");
await runViewport(browser, 390, 844, "-mobile");

await browser.close();
console.log("\nDone — screenshots saved to ./screenshots/\n");
