let express=require('express'),
    router=express.Router(),
    checkLogin = require('../middlewares/check').checkLogin;

//GET/posts
router.get('/',(req,res,next)=>{
    res.send(req.flash());
});