const path = require('path'); // node tool for path
const express = require('express'); // load express
const app = express(); // new instance of express
const publicPath = path.join(__dirname, '..', 'public'); // path to public folder
const port = process.env.PORT || 3000; // 3000 is for local rest for Heroku

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});
