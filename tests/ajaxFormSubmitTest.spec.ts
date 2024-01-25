import { test, expect } from '@playwright/test';

import ajaxFormSubmit from '../pages/ajaxFormSubmit';

test('AjaxFormSubmit Testing',async ({page}) => {
    const AjaxFormSubmit = new ajaxFormSubmit(page);
    await page.goto('https://www.lambdatest.com/selenium-playground/');
    // await page.goto('/');
    await AjaxFormSubmit.clickAjaxLink();

    await page.waitForTimeout(10000)
    await expect(await AjaxFormSubmit.actualText.textContent()).toEqual('  Ajax Request is Processing!');
})