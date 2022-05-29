# Create container from node image
FROM node:alpine
# Create a directory to mount application files
RUN mkdir /usr/app
WORKDIR /usr/app
# Copy application files to the work directory
COPY . .
# Install application dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install --quiet
# Run application config and startup scripts
CMD ["npm", "run", "build", "&&", "npm", "run", "preview"]
#ENV NODE_ENV=production
#EXPOSE 3333
#RUN chown -R node /usr/app
#USER node
#CMD ["npm", "start"]
