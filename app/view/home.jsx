import React from 'react'
import Button from '../components/button/index.jsx'

class Home extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      modal: false
    }
    this.handleModal = this.handleModal.bind(this)
  }

  handleModal () {
    this.setState({
      modal: !this.state.modal
    })
  }

  render () {
    return (
      <section role="Home">
        {
          this.state.modal && <div>modal</div>
        }
        <section className="carousel">
          carousel
        </section>
        <section className="features">
          features
        </section>
        <section className="begin">
          begin
          <Button onClick={this.handleModal} text="Start" />
        </section>
      </section>
    )
  }
}

export default Home
