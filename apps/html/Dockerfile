FROM node:14.18.1
WORKDIR /app
COPY ./dist/apps/html .
RUN ls -lf dist
ENV PORT=3334
EXPOSE ${PORT}
RUN npm install --production
RUN npm install reflect-metadata tslib rxjs hbs
CMD node ./main.js
