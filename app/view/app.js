import React from 'react'
import ReactDOM from 'react-dom'

import Form from '../containers/form/index.js'

class App extends React.Component {
  constructor (props) {
    super(props)

  }

  render () {
    return (
      <div>

        <Form/>
      </div>
    )
  }
}

export default App
