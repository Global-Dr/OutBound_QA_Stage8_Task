import { page } from 'playwright';
export class SignUp {
    constructor(page) {
        this.page = page;
        this.email = page.locator('input[placeholder="Enter email address"]');
        this.password = page.locator('input[placeholder="Enter password"]');
        // this.signup = page.locator('button[type="submit"]')
    }

    async signupSteps(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
        // await this.signup.click()
    }
    
}