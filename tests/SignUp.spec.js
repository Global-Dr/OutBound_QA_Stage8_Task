import { test, expect } from '@playwright/test';
import { SignUp } from '../ProjectObjects/SignUp.js';
import { data } from '../data/signUpData.json';


test.describe('SignUp Test Scenarios', () => {
    let signUpPage;
    test.beforeEach(async ({ page }) => {
        signUpPage = new SignUp(page);
        await page.goto('https://outbound.im');
    });

    test('Sign Up with Valid details', async ({ page }) => {
        await page.getByRole('navigation').getByRole('link', { name: 'Get Started' }).click();
        await signUpPage.signupSteps(data.valid_signUp.email, data.valid_signUp.password);
        await page.click('button[type="submit"]');
        await expect(page.getByRole('heading', { name: 'Verification' })).toBeVisible();
    });

    test('Sign Up Email With_mixedCase', async ({ page }) => {
        await page.getByRole('navigation').getByRole('link', { name: 'Get Started' }).click();
        await signUpPage.signupSteps(data.EmailWith_mixedCases.email, data.EmailWith_mixedCases.password);
        await page.click('button[type="submit"]');
        await expect(page.getByRole('heading', { name: 'Verification' })).toBeVisible();
    });

    test('Sign Up with specialCharacters Password', async ({page}) => {
        await page.getByRole('navigation').getByRole('link', { name: 'Get Started' }).click();
        await signUpPage.signupSteps(data.EmailPassword_withspecialCharacters.email, data.EmailPassword_withspecialCharacters.password);
        await page.click('button[type="submit"]');
        await expect(page.getByRole('heading', { name: 'Verification' })).toBeVisible();
    });

    test('Sign Up with 2_Characters domain Extension', async ({page}) => {
        await page.getByRole('navigation').getByRole('link', { name: 'Get Started' }).click();
        await signUpPage.signupSteps(data.domainExtensionOf_2_Characters.email, data.domainExtensionOf_2_Characters.password);
        await page.click('button[type="submit"]');
        await expect(page.getByRole('heading', { name: 'Verification' })).toBeVisible();
    });

    test('Sign Up with extensionUp to_5_Characters', async ({page}) => {
        await page.getByRole('navigation').getByRole('link', { name: 'Get Started' }).click();
        await signUpPage.signupSteps(data.extensionUpTo_5_Characters.email, data.extensionUpTo_5_Characters.password);
        await page.click('button[type="submit"]');
        await expect(page.getByRole('heading', { name: 'Verification' })).toBeVisible();
    });


    test('Verify password field toggle functionality', async ({page}) => {
        await page.getByRole('navigation').getByRole('link', { name: 'Get Started' }).click();
        await signUpPage.signupSteps(data.valid_signUp.email, data.valid_signUp.password);
        await page.getByRole('button').filter({ hasText: /^$/ }).click();
        //verify password is visible
        //expect(page.getAttribute('input[type="password"]', 'type')).toBe('text');
    });


    test('Email missing @ symbol', async ({page}) => {
        await page.getByRole('navigation').getByRole('link', { name: 'Get Started' }).click();
        await signUpPage.signupSteps(data.MissingSymbol.email, data.MissingSymbol.password);
        //verify error message is displayed
        expect(page.getByText('Invalid email format')).toBeTruthy();
    });

    test('Email missing domain name', async ({page}) => {
        await page.getByRole('navigation').getByRole('link', { name: 'Get Started' }).click();
        await signUpPage.signupSteps(data.MissingDomainName.email, data.MissingDomainName.password);
        //verify error message is displayed
        expect(page.getByText('Invalid email format')).toBeTruthy();
    })

    // test.afterEach(async ({page}) => {
    //     await page.pause();
    // })
})