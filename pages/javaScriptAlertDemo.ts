import { Page, Locator } from "@playwright/test";

class javaScript{
    readonly page: Page;
    linkJavaScript: Locator;
    promt: Locator;
    checkClicked: Locator;
    
    

    constructor(page:Page){
        this.page = page;
        this.linkJavaScript = page.getByRole('link', { name: 'Javascript Alerts' });
        this.promt = page.locator('p').filter({ hasText: 'Confirm box:Click Me' }).getByRole('button');
        this.checkClicked = page.getByText('You pressed Cancel!');
    }
    async clickPromtBox(){
        await this.linkJavaScript.click();
        await this.promt.click();
    }
}

export default javaScript;