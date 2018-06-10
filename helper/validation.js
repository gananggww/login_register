const isValid = (username, password) => {
  if (username.length > 5 && username.length < 16) {
    if (/^[a-z0-9]+$/i.test(username)) {
      if (password.length > 7 && password.length < 17) {
        return true
      } else {
        return {
          status: false,
          message: 'Password length must be 8-16 character'
        }
      }
    } else {
      return {
        status: false,
        message: 'Username only alphabet and numeric are allowed.'
      }
    }
  } else {
    return {
      status: false,
      message: 'Username length must be 6-15 character'
    }
  }
}

const isRegiter = (email, username, password, password_2) => {
  if (username) {
    if (email) {
      if (password) {
        if (password_2) {
          if (username.length > 5 && username.length < 16) {
            if (/^[a-z0-9]+$/i.test(username)) {
              if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
                if (password.length > 7 && username.length < 17) {
                  if (password === password_2) {
                    return true
                  } else {
                    return {
                      status: false,
                      message: 'Password and password confirmation must have same value.'
                    }
                  }
                } else {
                  return {
                    status: false,
                    message: "Password field length must between 8-16 character."
                  }
                }
              } else {
                return {
                  status: false,
                  message: "Email field must follow a valid e-mail format (e.g. test123@gmail.com)."
                }
              }
            } else {
              return {
                status: false,
                message: 'Username unique and only alphabet and numeric are allowed.'
              }
            }
          } else {
            return {
              status: false,
              message: 'Username field length must between 6-15 character,'
            }
          }
        } else {
          return {
            status: false,
            message: 'please fill password comfirmation'
          }
        }
      } else {
        return {
          status: false,
          message: 'please fill password'
        }
      }
    } else {
      return {
        status: false,
        message: 'please fill email'
      }
    }
  } else {
    return {
      status: false,
      message: 'please fill username'
    }
  }
}

const isSeller = (body) => {
  if (body.ktp.toString().length === 16) {
    if (/^\d+$/.test(body.ktp)) {
      if ((/\.(jpg|png)$/i).test(body.photo_user) && (/\.(jpg|png)$/i).test(body.photo_ktp)) {
        return true
      } else {
        return {
          status: false,
          message: 'format must PNG or JPG'
        }
      }
    } else {
      return {
        status: false,
        message: 'only numeric characters allowed.'
      }
    }
  } else {
    return {
      status: false,
      message: 'KTP number is 16 digit long'
    }
  }
}

module.exports = {
  isValid,
  isRegiter,
  isSeller
}
