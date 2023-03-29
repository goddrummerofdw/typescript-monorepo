FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./
COPY . .

ARG port
ENV PORT=$port

RUN yarn 
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]