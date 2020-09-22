const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.json());

let slots = [
  {
    id: 2346,
    timeDescription: '2020-09-30, 12:00-12:30'
  }
];

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/slots', (req, res) => {
  res.json({
    slots
  });
})

app.post('/slots', (req, res) => {
  slots.push({
    id: slots.length,
    timeDescription: req.body.timeDescription
  })
  res.sendStatus(201);
})


let apiInstance = null;
exports.start = () => {
  apiInstance = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}

exports.stop = () => {
  apiInstance.close();
}