import { Page, Locator } from "@playwright/test";

class Redirection{
    readonly page: Page;
    linkRedirection: Locator;
    linkHere: Locator;
    locLogo: Locator;


    constructor(page:Page){
        this.page = page;
        this.linkRedirection =  page.getByRole('link', { name: 'Redirection' });
        this.linkHere =  page.getByRole('link', { name: 'here' });
        this.locLogo =  page.getByRole('link', { name: 'Logo' });
    }

    async doRedirection(){
        await this.linkRedirection.click();
        await this.linkHere.click();
    }
}

export default Redirection;