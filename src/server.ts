import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  return res.send('Hello World 2');
})

app.listen(3333, () => {
  console.log('Server started on port 3333');
})