FROM node:18.16.0 AS build
WORKDIR /build
COPY . .
RUN npm i
RUN npm run build

FROM ghcr.io/puppeteer/puppeteer:latest AS production
WORKDIR /app
COPY --from=build /build/dist .
COPY --from=build /root/.cache/puppeteer /root/.cache/puppeteer
COPY ./template /app/template
COPY ./html /app/html
COPY ./picture /app/picture

ENTRYPOINT [ "node", "index.js" ]