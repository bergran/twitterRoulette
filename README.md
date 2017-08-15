TwitterRoulette is an app which you can do giveaways with people that is
following you, retweeted any tweet

This project has as purpose practice React, css and some technologies more. Its
will be only develop in frontend, that means if you want to try it you'll need
to mount it on an apache / nginx

# Dependency

  - express 4.15.3
  - react 15.6.1
  - react-dom 15.6.1
  - react-router-dom 4.1.2

# Developer Dependencies

  - babel-core 6.25.0",
  - babel-loader 7.1.1,
  - babel-preset-es2015 6.24.1,
  - babel-preset-latest-minimal 1.1.2,
  - babel-preset-react 6.24.1,
  - webpack 3.4.0

# Installing
At first you have to install all devependencies with next command

  `npm i` or `npm install`

# Config

The configuration file is on:

  - Server: `./server/config/index.json`
    ```
    - port: where server will listen. Note You may know if you want execute on port 80 or 443 you have to use sudo permission, anyway this app should listening under apache or nginx
    ```



# Deploy
Its easy, after install just go to 'host_ip:[host_port]' in your webBrowser
and then wait to load page
