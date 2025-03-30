import { test, expect } from '@playwright/test';
import { ForgetPassword } from '../ProjectObjects/ForgetPassword.js';
import { data } from '../data/ForgetPassData.json';

test.describe('Forget Password Test Scenarios', () => {
    let forgetPasswordPage;
    test.beforeEach(async ({ page }) => {
        forgetPasswordPage = new ForgetPassword(page);
        await page.goto('https://outbound.im/login');
    });

    test('Forget Password with Registered Email', async ({ page }) => {
        await page.getByRole('link', { name: 'Forgot password?' }).click();
        //Verify user is on the Forget Password page
        await expect(page.getByRole('heading', { name: 'Forgot Password' })).toBeVisible();
        await forgetPasswordPage.ForgetPasswordSteps(data.registered_email.email);
        await page.getByRole('button', { name: 'Send Reset Link' }).click();
        //verify success message is displayed
        expect(page.getByText('Success').isVisible()).toBeTruthy();
    });

    // test('Forget Password with Unregistered Email', async ({page}) => {
    //     await page.getByRole('link', { name: 'Forgot password?' }).click();
    //     //Verify user is on the Forget Password page
    //     await expect(page.getByRole('heading', { name: 'Forgot Password' })).toBeVisible();
    //     await forgetPasswordPage.ForgetPasswordSteps(data.Unregistered_email.email);
    //     await page.getByRole('button', { name: 'Send Reset Link' }).click();
    //     //verify error message is displayed
    //     expect(page.getByText('Email not found')).toBeTruthy();
    // });

    test('Forget Password with Invalid Email Format', async ({page}) => {
        await page.getByRole('link', { name: 'Forgot password?' }).click();
        //Verify user is on the Forget Password page
        await expect(page.getByRole('heading', { name: 'Forgot Password' })).toBeVisible();
        await forgetPasswordPage.ForgetPasswordSteps(data.Invalid_emailFormat.email);
        //verify error message is displayed
        expect (page.getByText('Invalid email format')).toBeVisible();
        //Verify user remain on the Forget Password page
        await expect(page.getByRole('heading', { name: 'Forgot Password' })).toBeVisible();
        
    });

// // test.afterEach(async ({page}) => {
// //         await page.pause();
//     })

})