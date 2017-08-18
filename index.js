let path=require('path'),
    express=require('express'),
    app=express(),
    indexRouter=require('./routes/index')
    // userRouter=require('./routes/users')
    ;
//存放模板文件
app.set('views',path.join(__dirname,'views'));
//模板引擎为ejs
app.set('view engine','ejs');

app.use('/',indexRouter);
app.use('/users',userRouter);
//占位符，获取路由信息并打印



app.listen(4000);