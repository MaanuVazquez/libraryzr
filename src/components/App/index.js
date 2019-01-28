import React, {useState} from 'react'
import './styles.css'
import styles from './App.module.css'
import {LibraryDirectoryContext} from '../../shared/contexts'
import Settings from '../Settings'
import FileList from '../FileList'

const App = () => {
  const [libraryDir, setDir] = useState(window.localStorage.getItem('libraryDir'))

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <LibraryDirectoryContext.Provider value={libraryDir}>
          <Settings setDir={setDir}/>
          <FileList/>
        </LibraryDirectoryContext.Provider>
      </header>
    </div>
  )
}

export default App
