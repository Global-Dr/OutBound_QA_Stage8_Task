import { page } from 'playwright';
export class ForgetPassword {
    constructor(page) {
        this.page = page;
        this.email = page.locator('input[placeholder="Enter email address"]');
        // this.login = page.locator('button[type="submit"]')
    }

    async ForgetPasswordSteps(email) {
        await this.email.fill(email);
        // await this.login.click()
    }
    
}