const puppeteer = require("puppeteer");

const scrapeIndeed = async (url) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url);
  const jobs = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".jobsearch-SerpJobCard")).map(
      (el) => ({
        title: el.querySelector(".title").innerText.trim(),
        company: el.querySelector(".company").innerText,
        location: el.querySelector(".location").innerText,
        description: el.querySelector(".summary li").innerText,
      })
    )
  );
  console.log(jobs);
  await browser.close();
};

scrapeIndeed("https://uk.indeed.com/jobs?q=junior+developer&l=United+Kingdom");
