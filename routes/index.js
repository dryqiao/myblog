let express=require('express'),
    router=express.Router()
;
router.get('/',(req,res)=>{
    res.send('hello,express');
});
module.exports = router;