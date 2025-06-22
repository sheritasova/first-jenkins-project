import {test} from "@playwright/test";

test("", async ({ page }) => {
  // Navigate to https://www.youtube.com .
  await page.goto("https://www.youtube.com/");

  let searchBox = page.locator("//input[@name='search_query']");

  await page.waitForTimeout(3000);

  // click the search box.
  await searchBox.click();

  // enter "CYDEO" text in search box.
  await searchBox.fill("CYDEO");

  // press Enter key to search.
  await searchBox.press("Enter");

  // pause the it for 3 seconds.
  await page.waitForTimeout(3000);

  let firstLink = page.locator("(//a[@id='video-title'])[1]");

  // click the first link.
  await firstLink.click();

  // pause the it for 10 seconds.
  await page.waitForTimeout(10000);
});
