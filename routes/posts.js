let express=require('express'),
    router=express.Router(),
    checkLogin = require('../middlewares/check').checkLogin;

//GET/posts
router.get('/',(req,res,next)=>{
    res.render('posts');
});

//发表一篇文章
router.post('/',checkLogin,(req,res,next)=>{
    res.send(req.flash());
});
//发表文章页
router.get('/create',checkLogin,(req,res,next)=>{
    res.send(req.flash());
});
//单独一篇的文章页
router.get('/:postId',(req,res,next)=>{
    res.send(req.flash());
});
//更新文章页
router.get('/:postId/edit',checkLogin,(req,res,next)=>{
    res.send(req.flash());
});
//更新一篇文章
router.post('/:postId/edit',checkLogin,(req,res,next)=>{
    res.send(req.flash());
});
//删除一篇文章
router.get('/:postId/remove',checkLogin,(req,res,next)=>{
    res.send(req.flash());
});
//创建留言
router.post('/:postId/comment/:commentId/remove',checkLogin,(req,res,next)=>{
    res.send(req.flash());
});
router.get('/:postId/comment/:commentId/remove',checkLogin,(req,res,next)=>{
    res.send(req.flash());
});

module.exports = router;