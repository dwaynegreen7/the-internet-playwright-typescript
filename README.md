# the-internet-playwright-typescript
Playwright Project Automating Pages from The Internet project

[The Internet project](https://the-internet.herokuapp.com/) is a project hosted by Sauce Labs that contains pages for automation. You can choose whichever automation language you'd like, but this project is using playwright using Typescript. I wanted to have a copy of what the code looks like (as well as create Page Objects which aren't necessarily helpful for this particular practice site) so I'd have a reference if I wanted to practice in a different language or if anyone wants to create similar automation and is having issues with one of the pages.

In order to run these tests, you'll need to have node installed, then run:
    npm install

You might have to install the Playwright browsers first to run the tests:
    npx playwright install

Then, to run all the tests:
    npx playwright test
