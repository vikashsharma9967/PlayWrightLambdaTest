import { test, expect } from '@playwright/test';
import javaScript from '../pages/javaScriptAlertDemo';

test('javaScript',async ({page}) => {
    const javaScriptDemo = new javaScript(page);
    

    await page.goto('https://www.lambdatest.com/selenium-playground/')
    await javaScriptDemo.clickPromtBox();

    await expect(javaScriptDemo.checkClicked).toHaveText('You pressed Cancel!');

})