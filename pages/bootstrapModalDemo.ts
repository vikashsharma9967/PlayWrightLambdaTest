import { Page, Locator } from "@playwright/test";

class bootStrap{
    readonly page: Page;
    linkBootstrap: Locator;
    linkLaunch: Locator;
    linkChanges: Locator;
    
 
    constructor(page:Page){
        this.page = page;
        this.linkBootstrap = page.getByRole('link', { name: 'Bootstrap Modals' });
        this.linkLaunch = page.getByRole('button', { name: 'Launch Modal' });
        this.linkChanges = page.getByRole('button', { name: 'Save Changes' });

    }
    async clickBootStrap(){
        await this.linkBootstrap.click();
        await this.linkLaunch.first().click();
        await this.linkChanges.click();
    }
}

export default bootStrap;