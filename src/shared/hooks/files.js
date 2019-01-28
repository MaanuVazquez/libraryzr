import {useState, useEffect} from 'react'
import {remoteReadDir} from '../utils/electron'

export function useFilesInDirectory(directory) {
  const [files, setFiles] = useState([])

  async function getFilesInDirectory() {
    try {
      const readFiles = await remoteReadDir(directory)
      setFiles(readFiles)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (!directory) return
    getFilesInDirectory()
  }, [directory])

  return files
}
