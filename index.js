/**
 * Companies House Elasticsearch Reverse Proxy
 */

const express = require('express');
const authS3O = require('@financial-times/s3o-middleware');
const proxy = require('express-http-proxy');

const app = express();
