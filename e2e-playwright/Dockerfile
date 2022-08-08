FROM mcr.microsoft.com/playwright:v1.24.2-focal

COPY . /e2e-playwright

WORKDIR /e2e-playwright

RUN npm install
RUN npx playwright install chrome

CMD [ "npx", "playwright", "test", "--reporter=list" ]