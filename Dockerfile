FROM artifactory-dockerhub.cloud.capitalone.com/node:12
LABEL version="1.0"
LABEL maintainer="Hans Knecht <Hans.Knechtions@gmail.com"
LABEL description="DND Dice Roller CLI. ALlows for saving and loading of profiles with saved dice to roll and modifiers attach. \
Each character should get one profile with each type of roll, perception, dexterity, etc. Being saved inside as individual rolls to select. "
ENV ENV_PATH=/usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm ci
USER node

CMD ["node","bin/index.js"]
