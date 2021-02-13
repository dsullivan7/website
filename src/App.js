import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './App.scss'

library.add(fab)

function App() {
  return (
    <div className="App">
      <div className="header d-flex text-center align-items-center w-100 p-4 justify-content-center">
        <span className="px-2 header-text">Danny Sullivan</span>
      </div>
      <div className="d-flex content justify-content-around p-4">
        <Button className="icon-button" href="https://stackoverflow.com/users/2246559/danny-sullivan">
          <FontAwesomeIcon size="3x" icon={['fab', 'stack-overflow']} />
        </Button>
        <Button className="icon-button" href="https://www.linkedin.com/in/danny-sullivan-8a843846/">
          <FontAwesomeIcon size="3x" icon={['fab', 'linkedin']} />
        </Button>
        <Button className="icon-button" href="https://github.com/dsullivan7">
          <FontAwesomeIcon size="3x" icon={['fab', 'github']} />
        </Button>
      </div>
    </div>
  )
}

export default App
