var express = require('express');

var router = express.Router();

// ==================================================================================================================================================================================================================
// Mua Premium
router.get('/buy-premium', (req, res, next) =>{
    res.render('dashboard/buy-premium', {});

  
});
// ==================================================================================================================================================================================================================

module.exports = router;