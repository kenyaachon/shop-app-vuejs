FROM node:18-buster-slim

WORKDIR /app

COPY package*.json ./
COPY . .
RUN npm install

CMD ["npm", "run", "serve"]
EXPOSE 8081