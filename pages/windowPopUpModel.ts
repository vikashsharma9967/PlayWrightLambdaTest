import { Page, Locator } from "@playwright/test";

class windowPopUp{
    readonly page: Page;
    linkWindowPopUp: Locator;
    linkTwitter: Locator;

    constructor(page:Page){
        this.page = page;
        this.linkWindowPopUp = page.getByRole('link', { name: 'Window Popup Modal' });
        this.linkTwitter = page.getByRole('link', { name: 'Follow On Twitter' });
        
    }

    async clickPoP(){
        await this.linkWindowPopUp.click();
        await this.linkTwitter.click();
    }
}

export default windowPopUp;