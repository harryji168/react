const faker = require('faker');
const puppeteer = require('puppeteer');

const person = {
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
};
const validCardNum = "4242424242424242"
const validCvv = "123"
const validExpiry="1224"
const validCode = "V8W4A3"


const invalidCardNum = "1242424242424242"
const invalidCvv = "1234"
const invalidExpiry="1219"
const invalidCode = "V8W4A"

describe('Payment Form', () => {

  /*Test 1: Submit form with all valid details */
  
  test('Can submit payment form with all valid details', async () => {
    let browser = await puppeteer.launch({
      headless: false,
      devtools: false,
      slowMo: 100
    });
    let page = await browser.newPage();
   
    await page.goto('http://localhost:5500/payment');
    await page.waitForSelector('.payment-form');
    await page.click("input[name=name]");
    await page.type("input[name=name]", person.name);
    await page.click('.selection, .transition')
    await page.click('.visible.menu.transition > :nth-child(3)') /*select visa which is the 3rd child*/
    await page.click("input[id=number]");
    await page.type("input[id=number]", validCardNum);
    await page.click("input[id=cvv]");
    await page.type("input[id=cvv]", validCvv);
    await page.click("input[id=expiry]");
    await page.type("input[id=expiry]", validExpiry);
    await page.click("input[id=code]");
    await page.type("input[id=code]", validCode);
    await page.click("button")
    let error= await page.$(".error.required.field");
    expect(await error).toBe(null)
    await page.waitForTimeout(1000)
    await page.screenshot({
      path: "./screenshots/PaymentUnit/screenshot1.jpg",
      type: "jpeg",
      fullPage: true
    });

    browser.close();
  }, 9000000);


  /*Test2 button should remain disabled if all the details are invalid
  inputs: 
  1.Name => no-name
  2.CardType => Invalid => no-selection
  3.Card Num => Invalid number starting with 0, because visa card num starts with 4
  4. Expiry Date => Old date
  5. PostalCode => no.of characters are 5.
  */
  test('Cannot submit payment form with all invalid details', async () => {
    let browser = await puppeteer.launch({
      headless: false,
      devtools: false,
      slowMo: 100
    });
    let page = await browser.newPage();


    await page.goto('http://localhost:5500/payment');
    await page.waitForSelector('.payment-form');
    await page.click("input[name=name]");
    await page.type("input[name=name]", person.name);
    // await page.click('.selection, .transition')  /*do not select cardType */
    // await page.click('.visible.menu.transition > :nth-child(3)')
    await page.click("input[id=number]");
    await page.type("input[id=number]", invalidCardNum);
    await page.click("input[id=cvv]");
    await page.type("input[id=cvv]", invalidCvv);
    await page.click("input[id=expiry]");
    await page.type("input[id=expiry]", invalidExpiry);
    await page.click("input[id=code]");
    await page.type("input[id=code]", invalidCode);
    await page.click("button")
    let error= await page.$(".error.required.field")!==null
    expect(await error).toBe(true)
    await page.waitForTimeout(1000)
    await page.screenshot({
      path: "./screenshots/PaymentUnit/screenshot2.jpg",
      type: "jpeg",
      fullPage: true
    });
    browser.close();
  }, 9000000);
  /*Test3 error is present if cardType is not selected
  inputs: 
  1.Name =>valid
  2.CardType => not selected
  3.Card Num => valid
  4.Card Cvv =>valid
  5. Expiry Date =>valid
  6. PostalCode =>valid
  */
 test('Cannot submit payment form with invalid cardType', async () => {
  let browser = await puppeteer.launch({
    headless: false,
    devtools: false,
    slowMo: 100
  });
  let page = await browser.newPage();

  await page.goto('http://localhost:5500/payment');
  await page.waitForSelector('.payment-form');
  await page.click("input[name=name]");
  await page.type("input[name=name]", person.name);
  await page.click('.selection, .transition')
  // await page.click('.visible.menu.transition > :nth-child(3)') =>not selecting the cardType
  await page.click("input[id=number]");
  await page.type("input[id=number]", validCardNum);
  await page.click("input[id=cvv]");
  await page.type("input[id=cvv]", validCvv);
  await page.click("input[id=expiry]");
  await page.type("input[id=expiry]", validExpiry);
  await page.click("input[id=code]");
  await page.type("input[id=code]", validCode);
  await page.click("button")
  let error= await page.$(".error.required.field")!==null
  expect(await error).toBe(true)
  await page.waitForTimeout(1000)
  await page.screenshot({
    path: "./screenshots/PaymentUnit/screenshot3.jpg",
    type: "jpeg",
    fullPage: true
  });

 
  browser.close();
}, 9000000);

/*Test4 error class is present  if cardNum is invalid
  inputs: 
  1.Name =>valid
  2.CardType => Visa
  3.Card Num => input card num starts with 1,
  4.Cvv => valid
  5. Expiry Date =>valid
  6. PostalCode =>valid
  */
 test('Cannot submit payment form with invalid cardNum', async () => {
  let browser = await puppeteer.launch({
    headless: false,
    devtools: false,
    slowMo: 100
  });
  let page = await browser.newPage();


  await page.goto('http://localhost:5500/payment');
  await page.waitForSelector('.payment-form');
  await page.click("input[name=name]");
  await page.type("input[name=name]", person.name);
  await page.click('.selection, .transition')
  await page.click('.visible.menu.transition > :nth-child(3)')
  await page.click("input[id=number]");
  await page.type("input[id=number]", invalidCardNum);
  await page.click("input[id=cvv]");
  await page.type("input[id=cvv]", validCvv);
  await page.click("input[id=expiry]");
  await page.type("input[id=expiry]", validExpiry);
  await page.click("input[id=code]");
  await page.type("input[id=code]", validCode);
  await page.click("button")
  let error= await page.$(".error.required.field")!==null
  expect(await error).toBe(true)
  await page.waitForTimeout(1000)
  await page.screenshot({
    path: "./screenshots/PaymentUnit/screenshot4.jpg",
    type: "jpeg",
    fullPage: true
  });
 
  browser.close();
}, 9000000);

/*Test5 error class is present  if  cardCvv is invalid
  inputs: 
  1.Name =>valid
  2.CardType => Visa
  3.Card Num => valid,
  4. Cvv =>invalid,
  5. Expiry Date => valid
  6. PostalCode =>valid
  */
 test('Cannot submit payment form with invalid cardCvv', async () => {
  let browser = await puppeteer.launch({
    headless: false,
    devtools: false,
    slowMo: 100
  });
  let page = await browser.newPage();

  await page.goto('http://localhost:5500/payment');
  await page.waitForSelector('.payment-form');
  await page.click("input[name=name]");
  await page.type("input[name=name]", person.name);
  await page.click('.selection, .transition')
  await page.click('.visible.menu.transition > :nth-child(3)')
  await page.click("input[id=number]");
  await page.type("input[id=number]", validCardNum);
  await page.click("input[id=cvv]");
  await page.type("input[id=cvv]", invalidCvv);
  await page.click("input[id=expiry]");
  await page.type("input[id=expiry]", validExpiry);
  await page.click("input[id=code]");
  await page.type("input[id=code]", validCode);
  await page.click("button")
  let error= await page.$(".error.required.field")!==null
  expect(await error).toBe(true)
 
  await page.waitForTimeout(1000)
  await page.screenshot({
    path: "./screenshots/PaymentUnit/screenshot5.jpg",
    type: "jpeg",
    fullPage: true
  });
  browser.close();
}, 9000000);


/*Test6 error class is present  if Expiry date is invalid
  inputs: 
  1.Name =>valid
  2.CardType => Visa
  3.Card Num => valid,
  4. Cvv =>valid,
  5. Expiry Date => invalid
  6. PostalCode =>valid
  */
 test('Cannot submit payment form with invalid ExpiryDate', async () => {
  let browser = await puppeteer.launch({
    headless: false,
    devtools: false,
    slowMo: 100
  });
  let page = await browser.newPage();


  await page.goto('http://localhost:5500/payment');
  await page.waitForSelector('.payment-form');
  await page.click("input[name=name]");
  await page.type("input[name=name]", person.name);
  await page.click('.selection, .transition')
  await page.click('.visible.menu.transition > :nth-child(3)')
  await page.click("input[id=number]");
  await page.type("input[id=number]", validCardNum);
  await page.click("input[id=cvv]");
  await page.type("input[id=cvv]", validCvv);
  await page.click("input[id=expiry]");
  await page.type("input[id=expiry]", invalidExpiry);
  await page.click("input[id=code]");
  await page.type("input[id=code]", validCode);
  await page.click("button")
  
  let error= await page.$(".error.required.field")!==null
  expect(await error).toBe(true)
  await page.waitForTimeout(1000)
  await page.screenshot({
    path: "./screenshots/PaymentUnit/screenshot6.jpg",
    type: "jpeg",
    fullPage: true
  });

  browser.close();
}, 9000000);


/*Test7 error class is present  if Expiry date is invalid
  inputs: 
  1.Name =>valid
  2.CardType => Visa
  3.Card Num => valid,
  4. Cvv =>valid,
  5. Expiry Date => valid
  6. PostalCode => invalid
  */
 test('Cannot submit payment form with invalid PostalCode', async () => {
  let browser = await puppeteer.launch({
    headless: false,
    devtools: false,
    slowMo: 100
  });
  let page = await browser.newPage();


  await page.goto('http://localhost:5500/payment');
  await page.waitForSelector('.payment-form');
  await page.click("input[name=name]");
  await page.type("input[name=name]", person.name);
  await page.click('.selection, .transition')
  await page.click('.visible.menu.transition > :nth-child(3)')
  await page.click("input[id=number]");
  await page.type("input[id=number]", validCardNum);
  await page.click("input[id=cvv]");
  await page.type("input[id=cvv]", validCvv);
  await page.click("input[id=expiry]");
  await page.type("input[id=expiry]", validExpiry);
  await page.click("input[id=code]");
  await page.type("input[id=code]", invalidCode);
  await page.click("button")
  
  let error= await page.$(".error.required.field")!==null
  expect(await error).toBe(true)

  await page.waitForTimeout(1000)
  await page.screenshot({
    path: "./screenshots/PaymentUnit/screenshot7.jpg",
    type: "jpeg",
    fullPage: true
  });
  browser.close();
}, 9000000);
});



