import { expect,test } from "@playwright/test";
import uploadFile from "../pages/uploadFileDemo"

test('uploadFile',async ({page}) => {
    const uploadFileDemo = new uploadFile(page);
    await page.goto('https://www.lambdatest.com/selenium-playground/')
    uploadFileDemo.getFile();

    await expect(uploadFileDemo.verifyText).toHaveText('File Successfully Uploaded');
})