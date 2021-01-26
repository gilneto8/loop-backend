FROM node:12.13-alpine AS development

WORKDIR /usr/src/web-gate

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:12.13-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/web-gate

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/web-gate/dist ./dist

CMD ["node", "dist/main"]
