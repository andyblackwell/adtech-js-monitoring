#! /bin/bash

# ./tmp is the only writeable directory on heroku instances, and it is regularly wiped.
# so, we check if our file is already there, and if not, clone the repo to ./tmp

if [ ! -d tmp/data ]; then

  # you must set the $GITHUB_USER and $GITHUB_AUTH_TOKEN variables with `heroku config:add GITHUB_USER=username` or in Heroku's UI
  # See https://github.com/settings/tokens to create a token
  git config --global user.name "heroku-bot"
  git config --global user.email "heroku-bot@localhost"

  git clone https://github.com/$GITHUB_USER/adtech-js-monitoring tmp
fi

cd tmp/;

git pull origin master;

# lastly, run our script
node ./monitor.js;
