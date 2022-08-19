FROM node:14.18.1
WORKDIR /app
RUN ls
RUN pwd
COPY ../../dist/apps/api .
ENV PORT=3333
EXPOSE ${PORT}
RUN npm install --production
# dependencies that nestjs needs
RUN npm install reflect-metadata tslib rxjs @nestjs/platform-express
CMD node ./main.js
