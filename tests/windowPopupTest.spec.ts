import { expect,test } from "@playwright/test";
import windowPopUp from "../pages/windowPopUpModel"


test('windowPopUp',async ({page}) => {
    const windowPopUpDemo = new windowPopUp(page);
    await page.goto('https://www.lambdatest.com/selenium-playground/')
    windowPopUpDemo.clickPoP();

    const page1Promise = page.waitForEvent('popup');
    const page1 = await page1Promise;
    await page1.getByTestId('login').click();

    await expect(page1.title).toEqual(page1.title);
})