const puppeteer = require("puppeteer");

const scrapeIndeed = async (url) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  page.goto(url);
  let jobs = await page.evaluate(() => {
    document.querySelectorAll(".no-wrap").innerText;
  });
  console.log(jobs);
};

scrapeIndeed("https://uk.indeed.com/jobs?q=junior+developer&l=United+Kingdom");
