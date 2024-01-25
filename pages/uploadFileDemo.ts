import { Page, Locator } from "@playwright/test";

class uploadFile{
    readonly page: Page;
    linkUploadFile: Locator;
    locFile: Locator;
    verifyText: Locator;


    constructor(page:Page){
        this.page = page;
        this.linkUploadFile = page.getByRole('link', { name: 'Upload File Demo' });
        this.locFile = page.locator('#file');
        this.verifyText = page.getByText('File Successfully Uploaded');
    }

    async getFile(){
        await this.linkUploadFile.click();
        await this.locFile.setInputFiles('uploadFile/images.jpg');
    }
}

export default uploadFile;