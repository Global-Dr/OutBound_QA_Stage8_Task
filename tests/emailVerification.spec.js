// import { test, expect } from '@playwright/test';
// import { SignUp } from '../ProjectObjects/SignUp.js';
// import { data } from '../data/signUpData.json';

// test.describe('Email Verification Test Scenarios', () => {
//     let signUpPage;
//     test.beforeEach(async ({ page }) => {
//         signUpPage = new SignUp(page);
//         await page.goto('https://outbound.im/signup');
//     });

//     test('Verify user is on verification page', async ({ page }) => {
//         await signUpPage.signupSteps(data.valid_signUp.email, data.valid_signUp.password);
//         await page.click('button[type="submit"]');

//         //Verify redirect to verification page
//         await expect(page.getByRole('heading', { name: 'Verification' })).toBeVisible();
//     });

// })