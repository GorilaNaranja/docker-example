var express = require('express');
var cors = require('cors');
var redis = require('redis');
var app = express();

var redisHost = process.env.REDIS_HOST;

var redisClient = redis.createClient({ url: redisHost });

redisClient.on('connect', () => {
  console.log('Connected to redis');
});

redisClient.connect();

app.use(cors());

app.get('/', async (req, res) => {
  const name = await redisClient.get("name");
  res.json({ name });
})

app.listen(3000, () => {
  console.log("Api started");
})