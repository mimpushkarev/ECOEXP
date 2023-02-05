FROM node:16-alpine

WORKDIR /app

COPY ./ /app
RUN npm run build

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]