let express=require('express'),
    app=express();

app.get('/',(req,res)=>{
    res.send('hello,express');
});

app.get('/users/:name',(req,res)=>{
    res.send('hello,'+req.params.name);
});

app.listen(4000);