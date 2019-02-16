import React, { Component } from 'react'
import createClassName from '../utils/createClassName'
import './Checkbox.css'

class Checkbox extends Component {
  constructor(props) {
    super(props)

    this.updateStatus = this.updateStatus.bind(this)
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      isChecked: this.props.isChecked
    }
  }
  updateStatus(newValue) {
    this.setState({
      isChecked: newValue
    })
  }
  handleClick() {
    const newValue = !this.state.isChecked

    this.props.onChange(newValue)
    this.updateStatus(newValue)
  }
  render() {
    return (
      <div
        onClick={this.handleClick}
        className={createClassName([
          'Dashboard_Checkbox',
          this.state.isChecked ? 'actived' : null
        ])}
      />
    )
  }
}

export default Checkbox