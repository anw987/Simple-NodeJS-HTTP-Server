FROM node:lts-alpine

WORKDIR /app

# Copy package files first (better caching)
COPY package.json package-lock.json* ./

RUN npm config set strict-ssl false \
 && npm install

# Copy source
COPY app.js .

EXPOSE 8080

CMD ["npm", "start"]