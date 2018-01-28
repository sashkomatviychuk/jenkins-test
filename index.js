const express = require('express');
const path = require('path');
const http = require('http');
const app = require('./app');

// define port
const PORT = 3000;

// create http server
const server = http.createServer(app);

// listen port
server.listen(PORT);

// on listening
server.on('listening', () => {
    console.log(`Server started on port ${PORT}`);
});