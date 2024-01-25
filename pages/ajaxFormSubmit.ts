import { Page, Locator } from "@playwright/test";
import { test, expect } from '@playwright/test';

class ajaxFormSubmit{
    readonly page: Page;
    ajaxFormSubmitLink: Locator;
    nameInputTextBox: Locator;
    messageInputTextBox: Locator;
    submitBtn: Locator;
    actualText:Locator;
    
 
    constructor(page:Page){
        this.page = page;
        this.ajaxFormSubmitLink = page.getByRole('link', { name: 'Ajax Form Submit' });
        this.nameInputTextBox = page.locator('#title');
        this.messageInputTextBox = page.locator('#description')
        this.submitBtn = page.getByRole('button', { name: 'submit' });
        this.actualText = page.locator('#submit-control');
    }
    async clickAjaxLink(){
        await this.ajaxFormSubmitLink.click();
        await this.nameInputTextBox.fill("Vikash Kumar Sharma")
        await this.messageInputTextBox.fill("Hey I am feeling good Thank you!")
        await this.submitBtn.click();
        
    }
}

export default ajaxFormSubmit;