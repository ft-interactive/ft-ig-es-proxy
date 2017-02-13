# Basic Dockerfile is basic...

FROM mhart/alpine-node:base-6

EXPOSE 3000
CMD ["node", "index.js"]
