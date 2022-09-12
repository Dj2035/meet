import puppeteer from 'puppeteer';

let browser;
let page;
beforeAll(async () => {
  jest.setTimeout(300000);
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 250, // slow down by 250ms
    ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
  });
  page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  await page.waitForSelector('.event');
});

afterAll(() => {
  browser.close();
});


describe('show/hide an event details', () => {
  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .event-showDetails-btn')

    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .event-hideDetails-btn')

    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeNull();
  });
});

describe('filter events by city', () => {
  test('By default, when user hasn’t searched for a city, show upcoming events from all cities.', async () => {
    const events = page.$$('.event');
    await expect(events).resolves.toHaveLength(2);
  });

  test('User should see a list of suggestions when they search for a city.', async () => {
    await page.type(".city", "Berlin");
    const matchSuggestions = page.$$('.matchSuggestions');
    await expect(matchSuggestions).resolves.toHaveLength(1);
  });

  test('User can select a city from the suggested list.', async () => {
    await page.click(".matchSuggestions");
    const events = page.$$('.event');
    await expect(events).resolves.toHaveLength(1);
  });
});