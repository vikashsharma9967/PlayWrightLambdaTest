import { Page, Locator } from "@playwright/test";

class RadioButton{

    readonly page: Page;
    linkRadioButton: Locator;
    MaleRadioButton: Locator;
    btnGetValue: Locator;
    verifyText: Locator;

    
    constructor(page:Page){
        this.page = page;
        this.linkRadioButton = page.getByRole('link', { name: 'Radio Buttons Demo' });
        this.MaleRadioButton = page.getByLabel('Male').first();
        this.btnGetValue = page.getByRole('button', { name: 'Get value', exact: true });
        this.verifyText = page.getByText('Radio button \'Male\' is checked')
    }

    async clickRadioBtn(){
        
        await this.linkRadioButton.click();
        await this.MaleRadioButton.check();
        await this.btnGetValue.click();
    }
}

export default RadioButton; 