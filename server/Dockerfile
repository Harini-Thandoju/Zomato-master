FROM node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .

ENV MONGO_URL= mongodb+srv://HariniThandoju123:yin2uFwvfghj8pilCEHg@zomato-master.wca14.mongodb.net/Zomato?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID=914751456229-6qd4h849o0pvum7hoal7fghn8eaeuslkhg8q.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=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s6N2
ENV AWS_S3_ACCESS_KEY=AKIARCT2EXVNE3YRGfghjUEJ
ENV AWS_S3_SECRET_KEY=gtkXNOjNJCIywMl1afghjk6W5I7a8PMEVwJ/tA4bYgLd1
ENV NODE_ENV=production
ENV PORT=4000

CMD ["npm", "run", "start"]

