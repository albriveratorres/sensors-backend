const express = require('express');
const cors = require('cors');
const routerApi = require('./src/routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./src/middleware/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
const whiteList = ['http://localhost:3000'];
const options = {
  origin: (origin, callback) =>{
    if(whiteList.includes(origin) || !origin ){
      callback(null, true);
    }else{
      callback(new Error('acceso denegado por cors'));
    }
  }
}

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
app.use(cors(options));
app.listen(port, () => {
  console.log(`Server on Port ${port}`);
});
