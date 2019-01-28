import React, {useContext} from 'react'
import {LibraryDirectoryContext} from '../../shared/contexts'
import {useFilesInDirectory} from '../../shared/hooks/files'

const FileList = () => {
  const libraryDirectory = useContext(LibraryDirectoryContext)
  const filesInDirectory = useFilesInDirectory(libraryDirectory)

  if (!filesInDirectory.length) return <p>There is no directory selected or no files in the directory</p>

  return (
    <ul>
      {filesInDirectory.map((file, i) => (
        <li key={i}>{file}</li>
      ))}
    </ul>
  )
}

export default FileList
