import { expect, test } from "@playwright/test";

import Redirection from "../pages/RedirectionDemo";

test('Redirection',async ({page}) => {
    const RedirectionTest = new Redirection(page);
    await page.goto('https://www.lambdatest.com/selenium-playground/')
    await RedirectionTest.doRedirection();

})