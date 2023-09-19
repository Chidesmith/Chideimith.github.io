const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const groupURL = 'URL_OF_YOUR_WHATSAPP_GROUP';

    await page.goto(groupURL);

    setInterval(async () => {
        const messageToSend = "Your automated message here";
        await page.type('div[data-tab="1"] [contenteditable="true"]', messageToSend);
        await page.keyboard.press('Enter');
    }, 30000); // Send a message every 30 seconds
})();
