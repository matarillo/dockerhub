FROM matarillo/node-chrome:latest

WORKDIR /app
COPY ./app/ ./
RUN npm i

ENV NODE_ENV production
EXPOSE 8080
CMD [ "node", "app.js" ] 
