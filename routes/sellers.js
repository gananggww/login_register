const express = require('express');
const router = express.Router();
const sellers = require("../controller/sellers")

const jwt = require('jsonwebtoken');

const midty = (req, res, next) => {
  if(req.headers.hasOwnProperty('token')){
    var decoded = jwt.verify(req.headers.token,"shhhhh")
    req.headers.auth = decoded
    next()
  }
  else {
    res.send("Sorry, you must login")
  }
}

router.post('/', midty ,sellers.register);
router.get('/' ,sellers.getall);
router.delete('/:id', sellers.destroy);


module.exports = router;
