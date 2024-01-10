FROM node:17.3-alpine
LABEL description="Frontend client for Yaspi Website"
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
CMD ["npm", "run", "start"]