import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/BrowserContextFixture";

const url = "https://webdriveruniversity.com/";

Given('Navigate to the WebdriverUniversity homepage', async () => {
    await pageFixture.page.goto(url);
});

When('I click the contact us button', async () => {
    let contactusButton = pageFixture.page.getByRole('link', { name: 'CONTACT US Contact Us Form' });
    await contactusButton.click();
});

When('I switch to new tab', async () => {
    await pageFixture.context.waitForEvent("page");
    const allPages = pageFixture.context.pages();

    pageFixture.page = allPages[allPages.length - 1];
    await pageFixture.page.bringToFront();
    await pageFixture.page.setViewportSize({width:1920, height:1080});
});