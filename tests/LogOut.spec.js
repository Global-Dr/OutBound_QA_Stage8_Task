import { test, expect } from '@playwright/test';
import { Login } from '../ProjectObjects/Login.js';
import { data } from '../data/loginData.json';

test.describe('Logout Test Scenarios', () => {
    let loginPage;
    test.beforeEach(async ({ page }) => {
        loginPage = new Login(page);
        await page.goto('https://outbound.im/login');
    });

    test('Logout of account', async ({ page }) => {
        await loginPage.loginSteps(data.valid_login.email, data.valid_login.password);
        await page.click('button[type="submit"]');
        //verify success message is displayed
        expect(page.getByText('Login successful!').isVisible()).toBeTruthy();
        await page.locator('button[class="flex cursor-pointer items-center justify-end gap-1.5"]').click();
        await page.locator('button[aria-label="Log out"]').click();
        await page.getByRole('button', { name: 'Yes, Logout' }).click();
        //verify user is logged out and on the login page
        await expect(page.getByText('Please login to access your account')).toBeVisible();
    });

    test('Cancel Logout Process', async ({ page }) => {
        await loginPage.loginSteps(data.valid_login.email, data.valid_login.password);
        await page.click('button[type="submit"]');
        //verify success message is displayed
        expect(page.getByText('Login successful!').isVisible()).toBeTruthy();
        await page.locator('button[class="flex cursor-pointer items-center justify-end gap-1.5"]').click();
        await page.locator('button[aria-label="Log out"]').click();
        await page.getByRole('button', { name: 'Cancel' }).click();
        //verify user is still logged in and on the dashboard
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    });

    // test.afterEach(async ({page}) => {
    //     await page.pause();
    // })

})