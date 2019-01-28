import React, {useCallback} from 'react'
import {getPath} from '../../shared/utils'

const Settings = ({setDir}) => {
  const changeDirectory = useCallback(
    e => {
      console.log(e.target.files, 'entered')
      const cleanPath = getPath(e.target.files)
      if (!cleanPath) return
      window.localStorage.setItem('libraryDir', cleanPath)
      setDir(cleanPath)
    },
    [setDir]
  )

  return <input type='file' onChange={changeDirectory}/>
}

export default Settings
