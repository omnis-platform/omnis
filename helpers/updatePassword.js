const updatePassword = data => JSON.stringify({ 
  data: { 
    password: data.password, 
    password_confirmation: data.passwordConfirmation 
  } 
})

module.exports = updatePassword
