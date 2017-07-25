import React from 'react'
import ReactDOM from 'react-dom'

import App from './view/app.js'

class Launcher extends React.Component {


  render() {
    return (<App/>)
  }
}

ReactDOM.render(<Launcher/>, document.getElementById('root'))
