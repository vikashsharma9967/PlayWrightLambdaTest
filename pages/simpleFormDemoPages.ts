import { Page, Locator } from "@playwright/test";

class simpleForm{
    readonly page: Page;
    linkSimplePageDemo: Locator;
    fillMessage: Locator;
    btnGetChecked: Locator;
    expectText: Locator;
    verifyText: Locator;
    firstValue: Locator;
    secondValue: Locator;
    btnSum: Locator;
    verifyNum: Locator;


    constructor(page:Page){
        this.page = page;
        this.linkSimplePageDemo = page.getByRole('link', { name: 'Simple Form Demo' });
        this.fillMessage = page.getByPlaceholder('Please enter your Message');
        this.btnGetChecked = page.getByRole('button', { name: 'Get Checked Value' });
        this.verifyText = page.locator('.flex > .w-4\\/12').first();
        
        this.firstValue = page.getByPlaceholder('Please enter first value');
        this.secondValue = page.getByPlaceholder('Please enter second value');
        this.btnSum = page.getByRole('button', { name: 'Get Sum' });
        this.verifyNum = page.locator('.input-body > .flex > .w-4\\/12');
    }


    // async goto(){
    //     await this.page.goto('selenium-playground');
    // }

    async fillSimpleForm(){
        await this.linkSimplePageDemo.click();
        await this.fillMessage.fill("Hey this is a test message");
        await this.btnGetChecked.click();
        await this.firstValue.fill('8');
        await this.secondValue.fill('7');
        await this.btnSum.click();
    }


}

export default simpleForm;