const faker = require('faker');
const puppeteer = require('puppeteer');

const validVin = "1G1AK15FX67646740"
const invalidVin ="1G1AK15FX6764674"
// const allMan

describe('Search Bar', () => {

  /*Test 1: Search with valid Vehicle Idenitifcation Number
  inputs: 
  vin=>valid
  
  */
  
  test('Can search for VIN details with Valid VIN', async () => {
    let browser = await puppeteer.launch({
      headless: false,
      devtools: false,
      slowMo: 100
    });
    let page = await browser.newPage();
   
    await page.goto('http://localhost:5500');
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

    browser.close();
  }, 9000000);


  /*Test 2: Search for a particular Manufacturer
  manufacturer => Aston Martin
  */
  
  test('Can search with valid Manufaturer name', async () => {
    let browser = await puppeteer.launch({
      headless: false,
      devtools: false,
      slowMo: 100
    });
    let page = await browser.newPage();
   
    await page.goto('http://localhost:5500');
    await page.waitForSelector('#search-form');
    await page.click('.selection, .transition')
    await page.click('.visible.menu.transition > :nth-child(3)')
    await page.click("button[name=search]")
    await page.waitForSelector("#man-details");
    await page.waitForSelector("h1")
    let element = await page.$('#man-details h1')
    let receieved = await page.evaluate(el => el.textContent, element)
    let expected = "Manufacturer Details"
    expect(await receieved).toBe(expected)
    browser.close();
  }, 9000000);



  /*Test 3: Search for all Manufacturers
  manufacturer => all
  */
  
 test('Can search with valid Manufaturer name', async () => {
  let browser = await puppeteer.launch({
    headless: false,
    devtools: false,
    slowMo: 100
  });
  let page = await browser.newPage();
 
  await page.goto('http://localhost:5500');
  await page.waitForSelector('#search-form');
  await page.click('.selection, .transition')
  await page.click('.visible.menu.transition > :nth-child(1)') //selecting all option
  await page.click("button[name=search]")
  await page.waitForSelector("#all-man-details");
  await page.waitForSelector("h1")
  let element = await page.$('#all-man-details h1')
  let receieved = await page.evaluate(el => el.textContent, element)
  let expected = "All Manufacturers"
  expect(await receieved).toBe(expected)
  browser.close();
}, 9000000);


/*Test 4: Search for all Manufacturers with valid Vin and Valid Manufacturer => Happy Path 
  This test is to ensure that we can search for either Vin or Manufaturer only
  steps:
  1. enter valid vin
  2. then select all
  output=> should return all manufacturers 
  */
  
 test('Can search with valid Manufaturer after valid vin', async () => {
  let browser = await puppeteer.launch({
    headless: false,
    devtools: false,
    slowMo: 100
  });
  let page = await browser.newPage();
 
  await page.goto('http://localhost:5500');
  await page.click("input[name=vin]");
  await page.type("input[name=vin]", validVin);
  await page.waitForSelector('#search-form');
  await page.click('.selection, .transition')
  await page.click('.visible.menu.transition > :nth-child(1)') //selecting all option
  await page.click("button[name=search]")
  await page.waitForSelector("#all-man-details");
  await page.waitForSelector("h1")
  
  let elementVin = await page.$('#vin-details h1')
  expect(await elementVin).toBe(null) /*Vin Details section should be null*/

  let element = await page.$('#all-man-details h1')
  let receieved = await page.evaluate(el => el.textContent, element)
  let expected = "All Manufacturers"
  expect(await receieved).toBe(expected)
  browser.close();
}, 9000000);


/*Test 5: Search for Vin Details with valid Vin and Valid Manufacturer
  This test is to ensure that we can search for either Vin or Manufaturer only
  steps:
  1. select a manufacturer
  2. enter a valid vin
  output=> should return vin details
  */
  
 test('Can search with valid Vin after valid manufacturer', async () => {
  let browser = await puppeteer.launch({
    headless: false,
    devtools: false,
    slowMo: 100
  });
  let page = await browser.newPage();
 
  await page.goto('http://localhost:5500');
  await page.waitForSelector('#search-form');
  await page.click('.selection, .transition')
  await page.click('.visible.menu.transition > :nth-child(1)') //selecting all option
  await page.click("input[name=vin]");
  await page.type("input[name=vin]", validVin);
  await page.click("button[name=search]")
  await page.waitForSelector("#vin-details");
  await page.waitForSelector("h1") 
  let elementMan = await page.$('#man-details h1')
  expect(await elementMan).toBe(null) /*Manufacturer Details section should be null*/
  
  let element = await page.$('#vin-details h1')
  let receieved = await page.evaluate(el => el.textContent, element)
  let expected = "Vin Details"
  expect(await receieved).toBe(expected)

  browser.close();
}, 9000000);

/*Test 6: Search without any input */
  
 test('Cannot search with empty fields', async () => {
  let browser = await puppeteer.launch({
    headless: false,
    devtools: false,
    slowMo: 100
  });
  let page = await browser.newPage();
 
  await page.goto('http://localhost:5500');
  await page.waitForSelector('#search-form');
  await page.click("button[name=search]")
  await page.waitForSelector("#error"); 
  let element = await page.$('#error')
  let receieved = await page.evaluate(el => el.textContent, element)
  let expected = "Please enter a VIN or select Manufacturer"
  expect(await receieved).toBe(expected)

  browser.close();
}, 9000000);


/*Test 7: Search with invalid Vehicle Idenitifcation Number
  vin=> invalid
  
  */
  
 test('Cannot search for VIN details with inValid VIN', async () => {
  let browser = await puppeteer.launch({
    headless: false,
    devtools: false,
    slowMo: 100
  });
  let page = await browser.newPage();
 
  await page.goto('http://localhost:5500');
  await page.waitForSelector('#search-form');
  await page.click("input[name=vin]");
  await page.type("input[name=vin]", invalidVin);
  await page.click("button[name=search]")
  await page.waitForSelector("#error"); 
  let element = await page.$('#error')
  let receieved = await page.evaluate(el => el.textContent, element)
  let expected = "Not a valid VIN"
  expect(await receieved).toBe(expected)

  let elementVin = await page.$('#vin-details h1')
  expect(await elementVin).toBe(null) /*Vin Details section should be null*/

  let elementallMan = await page.$('#all-man-details h1')
  expect(await elementallMan).toBe(null) /*AllManufactrer section should be null*/

  let elementMan = await page.$('#man-details h1')
  expect(await elementMan).toBe(null) /*Manufacturer Details section should be null*/
  

  browser.close();
}, 9000000);




});



