import { Page, Locator } from "@playwright/test";


class inputForm{
    readonly page: Page;
    linkInputForm: Locator;
    NameTextbox: Locator;
    EmailTextbox: Locator;
    PasswordTextbox: Locator;
    CompanyTextbox: Locator;
    WebsiteTextbox: Locator;
    CountryDropdownBox: Locator;
    CityTextbox: Locator;
    Address_1Textbox: Locator;
    Address_2Textbox: Locator;
    StateTextbox: Locator;
    ZipTextbox: Locator;
    btnSubmit: Locator;
    resultText: Locator;
    
    constructor(page:Page){
        this.page = page;
        this.linkInputForm = page.getByRole('link', { name: 'Input Form Submit' });
        this.NameTextbox = page.getByPlaceholder('Name', { exact: true });
        this.EmailTextbox = page.getByPlaceholder('Email', { exact: true });
        this.PasswordTextbox = page.getByPlaceholder('Password', { exact: true });
        this.CompanyTextbox = page.getByPlaceholder('Company', { exact: true });
        this.WebsiteTextbox = page.getByPlaceholder('Website', { exact: true });
        this.CountryDropdownBox = page.getByRole('combobox');
        this.CityTextbox = page.getByPlaceholder('City');
        this.Address_1Textbox = page.getByPlaceholder('Address 1');
        this.Address_2Textbox = page.getByPlaceholder('Address 2');
        this.StateTextbox = page.getByPlaceholder('State');
        this.ZipTextbox = page.getByPlaceholder('Zip code');
        this.btnSubmit = page.getByRole('button', { name: 'Submit' });
        this.resultText = page.getByText('Thanks for contacting us, we will get back to you shortly.');

    }

    async fillInputForm(){
        await this.linkInputForm.click();
        await this.NameTextbox.fill('Vikash');
        await this.EmailTextbox.fill('vikash.sharma@hotmail.com');
        await this.PasswordTextbox.fill('strong password');
        await this.CompanyTextbox.fill('xyz');
        await this.WebsiteTextbox.fill('www.pagalworld.com');
        await this.CountryDropdownBox.selectOption('India');
        await this.CityTextbox.fill('orrisa');
        await this.Address_1Textbox.fill('brahampur');
        await this.Address_2Textbox.fill('Dhanbad, Jharkhand');
        await this.StateTextbox.fill('Bhubaneshwar');
        await this.ZipTextbox.fill('828113');
        await this.btnSubmit.click();

    }

}

export default inputForm;