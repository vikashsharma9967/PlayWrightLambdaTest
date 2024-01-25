import { test, expect } from '@playwright/test';
import checkBox from '../pages/checkBoxDemo';

test('check box', async ({ page }) => {
    
  
    // await expect(page).toHaveTitle(/Playwright/);
  const checkBoxDemo = new checkBox(page);
  await page.goto('https://www.lambdatest.com/selenium-playground/');
  await checkBoxDemo.clickCheckBox();


  });