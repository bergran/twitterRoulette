import React from 'react'
import ReactDOM from 'react-dom'

import App from './view/app.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'



class Launcher extends React.Component {


  render() {
    const history = createBrowserHistory()
    return (
      <Router history={history}>
        <App/>
      </Router>
    )
  }
}

ReactDOM.render(<Launcher/>, document.getElementById('root'))
