// Optional Playwright exercise. Install @playwright/test only in your learner copy.
// Start npm start first. Run: npx playwright test sandbox/starter.spec.mjs
import {test,expect} from '@playwright/test';
test('allocation loads a reserved record', async ({page}) => {
  await page.goto('http://127.0.0.1:4178');
  await page.getByLabel('Candidate').selectOption(process.env.CANDIDATE || 'buggy');
  await page.getByRole('button',{name:'Load allocation',exact:true}).click();
  // Student: replace this weak assertion with one that detects the defect.
  await expect(page.getByRole('heading',{name:'Allocation dashboard'})).toBeVisible();
});
