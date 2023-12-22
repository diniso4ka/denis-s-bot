FROM node:16
WORKDIR /app

COPY . .

RUN yarn

ARG PORT
ARG DB_URL

CMD ["yarn", "start:prod"]

