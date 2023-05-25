FROM node:20-alpine3.16
LABEL description="Frontend client for Yaspi Website"
WORKDIR /frontend
COPY . .
RUN npm install --legacy-peer-deps
CMD ["npm", "run", "build"]