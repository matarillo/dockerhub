FROM node:lts-bookworm

RUN apt update && apt upgrade -y  && apt install -y fonts-ipafont chromium
RUN apt clean && rm -rf /var/lib/apt/lists/*
