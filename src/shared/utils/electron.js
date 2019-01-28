export function remoteReadDir(directory) {
  return new Promise((resolve, reject) => {
    window
      .require('electron')
      .remote.require('fs')
      .readdir(directory, (err, files) => {
        if (err) {
          return reject(err)
        }

        return resolve(files)
      })
  })
}
