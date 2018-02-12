const fileObject = async data => {
  return new Promise((resolve, reject) => {
    if (data.size < 10485760) {
      const reader = new FileReader()

      reader.onload = e => {
        const obj = {
          file: e.target.result,
          name: data.name,
          type: data.type,
          size: data.size
        }

        resolve(obj)
      }

      reader.readAsDataURL(data)
    } else {
      reject('File is to large')
    }
  })
}

module.exports = fileObject
