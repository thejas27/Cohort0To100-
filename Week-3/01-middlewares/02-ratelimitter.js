const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second
let numberOfRequestsForUser = {
};
//reseting the requestes after evry 1 minute..
setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

app.use((req, res, next) => {
  //fetching the userid from headers
  const userId = req.headers['user-id'];
  //initializing user id if it's not present in object
  if (!numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId] = 0;
  }
  //incrimenting the request count for user id
  numberOfRequestsForUser[userId]++;

  //check the number of request limit
  if (numberOfRequestsForUser[userId] > 5) {
    res.status(404).json({
      Error: 'Request limit exceeded',
    })
  }
  next();

})
app.get('/user', function (req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function (req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});
clearInterval(setInterval)
module.exports = app;