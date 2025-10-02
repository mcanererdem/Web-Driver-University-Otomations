import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "./hooks/BrowserContextFixture";
import { faker } from "@faker-js/faker"

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


When('I type a first name as {string}', async (firstname: string) => {
    let firstNameField = pageFixture.page.getByPlaceholder('First Name');
    await firstNameField.click();
    await firstNameField.fill(firstname);
});

When('I type a last name as {string}', async (lastname: string) => {
    let lastNameField = pageFixture.page.getByPlaceholder('Last Name');
    await lastNameField.click();
    await lastNameField.fill(lastname);
});

When('I type an email as {string}', async (email: string) => {
    let emailField = pageFixture.page.getByPlaceholder('Email Address');
    await emailField.click();
    await emailField.fill(email);
});

When('I type a comment as {string} {int}', async (comment: string, numara: number) => {
    let commentField = pageFixture.page.getByPlaceholder('Comments');
    await commentField.click();
    await commentField.fill(`${comment}  ${numara}`);
});

When('I type a random first name', async () => {
    let firstname = faker.person.firstName("male");
    let firstNameField = pageFixture.page.getByRole('textbox', { name: 'First Name' });
    await firstNameField.click();
    await firstNameField.fill(firstname);
});

// burası olmamış
When('I type a random last name', async () => {
    let lastname = faker.person.lastName("male");
    let lastNameField = pageFixture.page.getByRole('textbox', { name: 'Last Name' });
    await lastNameField.click();
    await lastNameField.fill(lastname);
});

When('I type a random email', async () => {
    let email = faker.internet.email();
    let lastNameField = pageFixture.page.getByRole('textbox', { name: 'Email Address' });
    await lastNameField.click();
    await lastNameField.fill(email);
});

When('I type a random comment', async () => {
    let comment = faker.word.words(5);
    let lastNameField = pageFixture.page.getByRole('textbox', { name: 'Comments' });
    await lastNameField.click();
    await lastNameField.fill(comment);
});

When('I type a {word} and a {word}', async (firstname: string, lastname: string) => {
    await pageFixture.page.getByPlaceholder('First Name').fill(firstname);
    await pageFixture.page.getByPlaceholder('Last Name').fill(lastname);
});

When('I type an {string} and a {string}', async (emailAddress: string, comment: string) => {
    await pageFixture.page.getByPlaceholder('Email Address').fill(emailAddress);
    await pageFixture.page.getByPlaceholder('Comment').fill(comment);
});

Then('Ishould be presented with {string}', async (welcomeMessage: string) => {
    let innerText = await pageFixture.page.locator("body").innerText()
    expect(innerText).toContain(welcomeMessage);
});