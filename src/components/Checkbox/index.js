import React, { Component } from 'react'

import { Checkbox as Check } from './styles'

class Checkbox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isChecked: this.props.isChecked
    }

  }

  updateStatus = (newValue) => {
    this.setState({
      isChecked: newValue
    });
  }

  handleClick = () => {
    const newValue = !this.state.isChecked

    this.props.onChange(newValue)
    this.updateStatus(newValue)

  }

  render() {
    return (
      <Check
        onClick={this.handleClick} isActive={this.state.isChecked}
      />
    )
  }
}

export default Checkbox;