FROM mihirsinhparmar/bacalhau-ie
WORKDIR .
COPY . .
RUN yarn install --production
CMD ["yarn", "execute"]
