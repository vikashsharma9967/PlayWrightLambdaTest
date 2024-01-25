import { expect, test } from "@playwright/test";
import inputForm from "../pages/InputFormSubmit"

test('Validating InputForm',async ({page}) => {
    const InputFormDemo = new inputForm(page);
    await page.goto('https://www.lambdatest.com/selenium-playground/');
    await InputFormDemo.fillInputForm();

    await expect(InputFormDemo.resultText).toHaveText('Thanks for contacting us, we will get back to you shortly.');
})