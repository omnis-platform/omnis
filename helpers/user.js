const user = async data => {
  let image = null

  if (data.image) image = await fileObject(data.image)

  return await {
    username: data.username,
    email: data.email,
    password: data.password,
    password_confirmation: data.passwordConfirmation,
    content: data.content,
    image: image
  }
}

module.exports = user
