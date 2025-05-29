import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { Browser, chromium } from "@playwright/test";
import { pageFixture } from "./BrowserContextFixture";

let browser: Browser

BeforeAll(async () => {
    console.log("Scenerios Starting To Be Executed")
})

AfterAll(async () => {
    console.log("\nScenerios Execution Finished")
})

Before(async () => {
    browser = await chromium.launch({ headless: false });
    pageFixture.context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
    pageFixture.page = await pageFixture.context.newPage();
})

After(async () => {
    await pageFixture.page.close();
    await browser.close();
})