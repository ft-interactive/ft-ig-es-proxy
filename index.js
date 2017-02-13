/**
 * Companies House Elasticsearch Reverse Proxy
 */

const express = require('express');
const authS3O = require('@financial-times/s3o-middleware');
const {authS3ONoRedirect} = authS3O;
const proxy = require('express-http-proxy');

const app = express();
const esEndpoint = process.env.ELASTICSEARCH_URL;

app.use('/_plugin', authS3O, proxy(`${esEndpoint}/_plugin`));
app.use('/', authS3ONoRedirect, proxy(esEndpoint));

app.listen(process.env.PORT || 8080);
