import { When,Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "./hooks/BrowserContextFixture";

When('I type a first name', async () => {
    let firstname = pageFixture.page.getByRole('textbox', { name: 'First Name' });
    await firstname.click();
    await firstname.fill('admin');
});

When('I type a last name', async () => {
    await pageFixture.page.getByRole('textbox', { name: 'Last Name' }).click();
    await pageFixture.page.getByRole('textbox', { name: 'Last Name' }).fill('admin');
});

When('I type an email', async () => {
    await pageFixture.page.getByRole('textbox', { name: 'Email Address' }).click();
    await pageFixture.page.getByRole('textbox', { name: 'Email Address' }).fill('admin@admin.com');
});

When('I type a comment', async () => {
    await pageFixture.page.getByRole('textbox', { name: 'Comments' }).click();
    await pageFixture.page.getByRole('textbox', { name: 'Comments' }).fill('No Comment');
});

When('I click on submit button', async () => {
    await pageFixture.page.getByRole('button', { name: 'SUBMIT' }).click();
});

Then('I should presented with contact us successful message', async () => {
    await pageFixture.page.getByRole('heading', { name: 'Thank You for your Message!' }).click();
    await expect(pageFixture.page.getByRole('heading')).toContainText('Thank You for your Message!');
});

Then('I should presented with contact us unsuccessful lastname message', async () => {
    let innerText = await pageFixture.page.locator("body").innerText()
    expect(innerText).toContain("Error: all fields are required")
});

Then('I should presented with contact us unsuccessful email message', async () => {
    let innerText = await pageFixture.page.locator("body").innerText()
    expect(innerText).toContain("Error: all fields are required\nError: Invalid email address");
});