require('dotenv').config();
const app = require('express')();
const bodyParser = require('body-parser');

// Midlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routers
app.use('/photo', require('./routers/photo'));

app.listen(process.env.PORT, () => {
  console.log(`🖥️  Server on ${process.env.PORT}`);
});
