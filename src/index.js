const express = require('express');

const { engine } = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded());
app.use(express.json());
//HTTP logger
// app.use(morgan('combined'));

//Template engine
// app.engine('handlebars', handlebars());
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './resources/views'));

//Routes init
route(app);
// req=request,res=response

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
