import { Page, Locator } from "@playwright/test";

class checkBox{
    readonly page: Page;
    linkCheckBox: Locator;
    lableCheckbox: Locator;
    btnCheckAll: Locator;

    constructor(page:Page){
        this.page = page;
        this.linkCheckBox = page.getByRole('link', { name: 'Checkbox Demo' });
        this.lableCheckbox = page.getByLabel('Click on check box');
        this.btnCheckAll = page.getByRole('button', { name: 'Check All' });
    }

    async clickCheckBox(){
        await this.linkCheckBox.click();
        await this.lableCheckbox.click();
        await this.btnCheckAll.click();
    }
}

export default checkBox;