let express = require('express'),
router = express.Router(),
checkNotLogin = require('../middlewares/check').checkNotLogin;

router.get('/',checkNotLogin,(req,res,next)=>{
res.send(req.flash());
});

router.post('/',checkNotLogin,(res,req,next)=>{
    res.send(req.flash());
});

module.exports = router;