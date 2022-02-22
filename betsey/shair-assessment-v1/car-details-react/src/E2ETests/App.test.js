const puppeteer = require('puppeteer');
const validVin = "1G1AK15FX67646740"
const invalidVin ="1G1AK15FX6764674"

const faker = require('faker');
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

describe('Search and Form', () => {

  /*Test 1: Search for vehicle details and submit payment form => Happy Path 😃 
  inputs: 
  vin=>valid
  cardNum, card types, cvv, expiry date, postal code=> valid
   steps: 
   open the home page, 
   click on search button to navigate to the section
   enter VIN
   expect vin section
   click on payment button in the menu bar
   enter all the details
   submit form
   expect no errors.
  */
  
  test('Can search for vehicle details and submit payment form', async () => {
    let browser = await puppeteer.launch({
      headless: false,
      devtools: false,
      slowMo: 100
    });
    let page = await browser.newPage();
   
    await page.goto('http://localhost:5500');
    await page.click("button")
    await page.waitForSelector('#search-form');
    await page.click("input[name=vin]");
    await page.type("input[name=vin]", validVin);
    await page.click("button[name=search]")
    await page.waitForSelector("#vin-details");
    await page.waitForSelector("h1")
    let element = await page.$('#vin-details h1')
    let receieved = await page.evaluate(el => el.textContent, element)
    let expected = "Vin Details"
    expect(await receieved).toBe(expected)
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.click("#payment-menu")
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
      path: "./screenshots/EndToEnd/test1/screenshot.jpg",
      type: "jpeg",
      fullPage: true
    });
    browser.close();
  }, 9000000);



  /*Test 2: Search for vehicle details with invalid data and submit payment form with valid data 
  inputs: 
  vin=>inValid
  cardNum => invalid
   card types, cvv, expiry date, postal code=> valid
   steps: 
   open the home page, 
   click on search button to navigate to the section
   enter VIN
   expect error
   click on payment button in the menu bar
   enter all the details
   submit form
   expect error.
  */
  
 test('Can search for vehicle details and submit payment form', async () => {
  let browser = await puppeteer.launch({
    headless: false,
    devtools: false,
    slowMo: 100
  });
  let page = await browser.newPage();
 
  await page.goto('http://localhost:5500',{waitUntil: 'networkidle0'});
  await page.click("button")
  await page.waitForSelector('#search-form');
  await page.click("input[name=vin]");
  await page.type("input[name=vin]", invalidVin);
  await page.click("button[name=search]")
  await page.waitForSelector("#error")
  let element = await page.$('#error')
  let receieved = await page.evaluate(el => el.textContent, element)
  let expected = "Not a valid VIN"
  expect(await receieved).toBe(expected)

  await page.evaluate(() => window.scrollTo(0, Number.MAX_SAFE_INTEGER))
  // await page.evaluate(() => {
  //   window.scrollBy(0, window.innerHeight);
  // });

  await page.waitForTimeout(8000)
  await page.screenshot({
    path: "./screenshots/EndToEnd/test2/screenshot.jpg",
    type: "jpeg",
    fullPage: true
  });
  await page.click("#payment-menu")
  await page.click("input[name=name]");
  await page.type("input[name=name]", person.name);
  await page.click('.selection, .transition')
  await page.click('.visible.menu.transition > :nth-child(3)') /*select visa which is the 3rd child*/
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
    path: "./screenshots/EndToEnd/test2/screenshot1.jpg",
    type: "jpeg",
    fullPage: true
  });
  browser.close();
}, 9000000);



});



