require('dotenv').config();
const app = require('express')();
const bodyParser = require('body-parser');
// const cors = require('cors');
// const corsOptions = require('./utils/corsOptions');

// Midlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors(corsOptions));

// Routers
app.use('/photo', require('./routers/photo'));

app.listen(process.env.PORT, () => {
  console.log(`🖥️  Server on ${process.env.PORT}`);
});
