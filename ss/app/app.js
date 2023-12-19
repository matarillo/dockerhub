const express = require('express');
const puppeteer = require('puppeteer-core');
const fs = require('fs').promises;
const app = express();
const port = 8080;

const screenshot = async (req, res, next) => {
    try {
        const browser = await puppeteer.launch({
            executablePath: '/bin/google-chrome',
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=480,800']
        });
        try {
            const page = await browser.newPage();
            await page.setViewport({
                width: 480,
                height: 800,
            });
            const url = req.query.url;
            if (!url || url.trim().length == 0) {
                res.status(400).send('request error');
                return;
            }
            await page.goto(url);
            await page.waitForSelector('div.detailed-status__wrapper');
            await new Promise(r => setTimeout(r, 2000));

            const clip = await page.evaluate(s => {
                const el = document.querySelector(s);
                const { width, height, top: y, left: x } = el.getBoundingClientRect();
                return { width, height, x, y };
            }, 'div.detailed-status__wrapper');
            await page.screenshot({ clip, path: 'ss.png' });
        } finally {
            await browser.close();
        }
        const content = await fs.readFile('ss.png');
        res.writeHead(200, {'Content-Type': 'image/png' });
        res.end(content);
    } catch (error) {
        next(error);
    }
}

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/ss', screenshot);

app.listen(port, () => console.log(`Listening on port ${port}. http://localhost:${port}/`));
