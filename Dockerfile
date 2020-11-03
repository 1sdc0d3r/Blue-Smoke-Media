# pull official base image
FROM node:current-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
# COPY yarn.lock ./

RUN npm install
# RUN yarn install --ignore-platform
# --pure-lockfile
# --ignore-engines

# add app
COPY . ./

# start app
CMD ["npm", "start"]
# docker build -t bsm:dev .
# docker run -it --rm -v ${pwd}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true bsm:dev
