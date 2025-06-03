import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "./hooks/BrowserContextFixture";

let dialogMessage: string = '';

When('I click the login portal button', async () => {
    await pageFixture.page.locator('#login-portal div[class="section-title"] h1').click()
});

When('I type a username {string}', async (username: string) => {
    let userNameField = pageFixture.page.getByPlaceholder('Username')
    await userNameField.click();
    await userNameField.fill(username);
});

When('I type a password {string}', async (password: string) => {
    let passwordField = pageFixture.page.getByPlaceholder('Password')
    await passwordField.click();
    await passwordField.fill(password);
});

When('I click on login button', async () => {
    pageFixture.page.once('dialog', async dialog => {
        dialogMessage = dialog.message();
        await dialog.accept();
    });

    const loginButton = pageFixture.page.locator('#login-button');
    await loginButton.click();
});

Then('I should presented with login successful message', async () => {
    expect(dialogMessage).toBe("validation succeeded");
});

Then('I should presented with login unsuccessful message', async () => {
    expect(dialogMessage).toBe("validation failed");
});