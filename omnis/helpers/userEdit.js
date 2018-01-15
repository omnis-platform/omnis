const userEdit = async (data, token) => {
  let image = null

  if (data.image) image = await fileObject(data.image)

  return await JSON.stringify({
    session_token: token,
    data: {
      username: data.username,
      email: data.email,
      password: data.password,
      password_confirmation: data.passwordConfirmation,
      content: data.content,
      image: image
    }
  })
}

module.exports = userEdit
