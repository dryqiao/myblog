let express=require('express'),
    router=express.Router(),
    PostModel=require('../models/posts'),
    checkLogin = require('../middlewares/check').checkLogin
    ;

//GET/posts
router.get('/',(req,res,next)=>{
    res.render('posts');
});

//发表一篇文章
router.post('/', checkLogin, function(req, res, next) {
    var author = req.session.user._id;
    var title = req.fields.title;
    var content = req.fields.content;
  
    // 校验参数
    try {
      if (!title.length) {
        throw new Error('请填写标题');
      }
      if (!content.length) {
        throw new Error('请填写内容');
      }
    } catch (e) {
      req.flash('error', e.message);
      return res.redirect('back');
    }
  
    var post = {
      author: author,
      title: title,
      content: content,
      pv: 0
    };
  
    PostModel.create(post)
      .then(function (result) {
        // 此 post 是插入 mongodb 后的值，包含 _id
        post = result.ops[0];
        req.flash('success', '发表成功');
        // 发表成功后跳转到该文章页
        res.redirect(`/posts/${post._id}`);
      })
      .catch(next);
  });
//发表文章页
router.get('/create',checkLogin,(req,res,next)=>{
    res.render('create');
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