import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './home.jsx'
import React from 'react'


class App extends React.Component{
  render () {
    return (
      <main role="aplication">
        <Route exact path="/" component={Home} />
      </main>
    )
  }
}

export default App
