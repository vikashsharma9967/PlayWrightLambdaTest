import { test, expect} from "@playwright/test";
import simpleForm from "../pages/simpleFormDemoPages";

test('SimpleFormDemo',async ({page}) => {
    
    const simpleFormDemo = new simpleForm(page);
    await page.goto('https://www.lambdatest.com/selenium-playground/')

    await simpleFormDemo.fillSimpleForm();

    await expect(simpleFormDemo.verifyText).toHaveText("Your Message: Hey this is a test message");

    await expect(simpleFormDemo.verifyNum).toHaveText('Result: 15');
    
})