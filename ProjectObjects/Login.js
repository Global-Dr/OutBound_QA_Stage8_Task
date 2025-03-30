import { page } from 'playwright';
export class Login {
    constructor(page) {
        this.page = page;
        this.email = page.locator('input[placeholder="Enter email address"]');
        this.password = page.locator('input[placeholder="Enter password"]');
        // this.login = page.locator('button[type="submit"]')
    }

    async loginSteps(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
        // await this.login.click()
    }
    
}