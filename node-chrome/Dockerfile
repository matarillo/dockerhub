FROM node:lts-bookworm

RUN apt update  && apt upgrade -y  && apt install -y fonts-ipafont software-properties-common apt-transport-https ca-certificates curl
RUN curl -fSsL https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor | tee /usr/share/keyrings/google-chrome.gpg >> /dev/null
RUN echo deb [arch=amd64 signed-by=/usr/share/keyrings/google-chrome.gpg] http://dl.google.com/linux/chrome/deb/ stable main | tee /etc/apt/sources.list.d/google-chrome.list
RUN apt update && apt install -y google-chrome-stable
RUN apt clean && rm -rf /var/lib/apt/lists/*
