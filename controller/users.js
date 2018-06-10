const db = require("../model/users")
const jwt = require('jsonwebtoken');
const validation = require('../helper/validation.js')

const user_list = (req, res) => {
  db.find()
  .then(row => {
    res.send({
      status: true,
      message: "success get all data",
      row
    })
  })
  .catch(row => {
    res.send({
      status: false,
      message: "failed get all data"
    })
  })
}

const destroy = (req, res) => {
  db.remove({
    _id:req.params.id
  })
  .then(row => {
    res.send(row)
  })
  .catch(err=>console.log(err))
}

const login = (req, res)=>{
  let isValids = validation.isValid(req.body.username, req.body.password)
  if (isValids === true) {
    db.findOne({username : req.body.username})
    .then(row=>{
      if(row.password == req.body.password && row.username == req.body.username) {
        var token = jwt.sign({
          id: row._id,
          username : row.username,
          name: row.name,
          email: row.email
        }, 'shhhhh');
        res.send({
          status: true,
          messege: "succes login",
          token : token,
          data : row})
      } else {
        res.send({
          status: false,
          message: 'Username or password is wrong'
        })
      }
    })
    .catch(err=>{
      res.send({
        status: false,
        messege: "User is not found"
      })
    })
  } else {
    res.send(isValids)
  }
}

const register = (req, res)=>{
  let isValids = validation.isRegiter(req.body.email, req.body.username, req.body.password, req.body.password_2)
  if (isValids === true) {
    db.create({
      email: req.body.email,
      username : req.body.username,
      password : req.body.password,
    }).then(response => {
      res.send({
        status: true,
        messege: "success added to database",
        data_inserted: response
      })
    })
    .catch(err=>{
      res.send({
        status: false,
        messege: "failed added to database"
      })
    })
  } else {
    res.send(isValids)
  }
}


module.exports = {
  user_list ,
  login,
  register,
  destroy,
}
