import { test, expect } from '@playwright/test';
import bootStrap from "../pages/bootstrapModalDemo"

test('BootStrap Testing',async ({page}) => {
    const bootStrapTest = new bootStrap(page);
    await page.goto('https://www.lambdatest.com/selenium-playground/');
    await bootStrapTest.clickBootStrap();
})