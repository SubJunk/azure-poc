FROM node:14.18.1
WORKDIR /app
RUN ls
RUN pwd
COPY ./dist/apps/html .
ENV PORT=3334
EXPOSE ${PORT}
RUN npm install --production
RUN npm install reflect-metadata tslib rxjs hbs
CMD node ./main.js
