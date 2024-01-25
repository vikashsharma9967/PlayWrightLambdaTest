import { test, expect } from '@playwright/test';
import RadioButton from '../pages/radioButton';

test('RadioButton Testing',async ({page}) => {
    const radioButton  = new RadioButton(page);
    await page.goto('https://www.lambdatest.com/selenium-playground/')
    await radioButton.clickRadioBtn();
    await expect(radioButton.verifyText).toHaveText("Radio button 'Male' is checked");
    
})