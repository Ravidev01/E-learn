const express = require("express");
const cors = require("cors");
const app = express();

var cookieParser = require('cookie-parser')

app.use(cookieParser())

const dbConfig = require("../server/config/db.config");

const authRouter = require("./router/auth.route");
const courseRouter = require('./router/courses.routes');
const teachersRouter = require('./router/teachers.routes');
const usersRouter = require('./router/users.routes');


app.use(express.json());
app.use(cors());
const port = process.env.PORT || 6000;

//Db connection

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(
    ()=>{
        console.log('Database connected');
    },
    (error) =>{
        console.log('Database not connected'+error);
    }
);

// Configs
// require('./configs/cors.config')(app)
require('./config/middleware.config')(app)
require('./config/passport.config')(app)

app.use('/api', authRouter);
app.use('/api/courses',courseRouter);
app.use('/api/teachers',teachersRouter);
app.use('/api/users',usersRouter);
// require('./router/auth.route')

module.exports = app



app.listen(port,(err)=>{
    if(err){
        console.log(err);
     }else {
     console.log("Server Started At Port" +" "+ port);  }
});



