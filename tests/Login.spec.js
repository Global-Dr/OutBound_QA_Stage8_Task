import { test, expect } from '@playwright/test';
import { Login } from '../ProjectObjects/Login.js';
import { data } from '../data/loginData.json';

test.describe('Login Test Scenarios', () => {
    let loginPage;
    test.beforeEach(async ({ page }) => {
        loginPage = new Login(page);
        await page.goto('https://outbound.im/login');
    });

    test('Login with Valid details', async ({ page }) => {
        await loginPage.loginSteps(data.valid_login.email, data.valid_login.password);
        await page.click('button[type="submit"]');
        //verify success message is displayed
        expect(page.getByText('Login successful!')).toBeTruthy();
        //verify user is logged in and on the dashboard
        //expect(page.getByRole('heading', { name: 'Dashboard' })).isVisible();
    });

    test('Login Existing Email with case variation', async ({ page }) => {
        await loginPage.loginSteps(data.ExistingEmail_CaseVariation.email, data.ExistingEmail_CaseVariation.password);
        await page.click('button[type="submit"]');
        //verify success message is displayed
        expect(page.getByText('Login successful!')).toBeTruthy();
        //verify user is logged in and on the dashboard
        //expect(page.getByRole('heading', { name: 'Dashboard' })).isVisible();
    });

    test('Login with wrong Password', async ({page}) => {
        await loginPage.loginSteps(data.Wrong_Password.email, data.Wrong_Password.password);
        await page.click('button[type="submit"]');
        //verify error message is displayed
        expect(page.getByText('Incorrect email or password')).toBeTruthy();
    });

    test('Login with unregistered email', async ({page}) => {
        await loginPage.loginSteps(data.Unregistered_Email.email, data.Unregistered_Email.password);
        await page.click('button[type="submit"]');

        // page.on('dialog', async (dialog) => {
        //     expect(dialog.message()).toContain('Uusernot found');
        // });
        //verify error message is displayed
        expect(page.getByText('User not found')).toBeTruthy();
    });

    // test.afterEach(async ({page}) => {
    //     await page.pause();
    // })
})