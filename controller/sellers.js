const db = require("../model/sellers")
const validation = require('../helper/validation.js')


const register = (req, res) => {
  let isValids = validation.isSeller(req.body)
  if (isValids === true) {
    db.create({
      ktp_number: req.body.ktp,
      photo_user: req.body.photo_user,
      photo_ktp: req.body.photo_ktp,
      user: req.headers.auth.id
    }).then(resp => {
      resp.populate('user', (err)=> {
        if (err) {
          res.send({
            status: false,
            message: "filed get a user authorizations"
          });
        } else {
          res.send({
            status: true,
            message: "success insert to database and populate a user",
            data: resp})
        }
      })
    }).catch(err=> {
      res.send({
        status: false,
        message: 'failed to insert data to database'
      })
    })
  } else {
    res.send(isValids)
  }
}

const destroy = (req, res) => {
  db.remove({_id:req.params.id})
  .then(resp => {
    res.send({
      status: true,
      message: "success deleted"
    })
  })
  .catch(err => {
    res.send({
      status: false,
      message: 'failed deleted'
    })
  })
}

const getall = (req, res) => {
  db.find()
  .then(resp => {
    res.send({
      status: true,
      message: "success get all data seller",
      data: resp
    }).
    catch(err => {
      res.send({
        status: false,
        message:"failed get all data seller",
        resp: err
      })
    })
  })
}

module.exports = {
  register,
  destroy,
  getall
}
