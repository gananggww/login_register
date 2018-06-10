const express = require('express');
const router = express.Router();
const users = require("../controller/users")

router.get('/', users.user_list);
router.post('/', users.login);
router.post('/register', users.register);
router.delete('/:id', users.destroy);


module.exports = router;
