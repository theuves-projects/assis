import React, { Component } from 'react'
import { storage } from 'firebase'

class Avatar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    storage()
      .ref()
      .child(this.props.uid)
      .getDownloadURL()
      .then(
        // On resolve
        (src) => {
          this.setState({
            src
          })
        },
        // On reject
        () => {
          this.setState({
            src: `https://api.adorable.io/avatars/200/${this.props.uid}.png`
          })
        }
      )
  }
  render() {
    const { forceSrc, ...props } = this.props

    return (
      <img
        ref={(el) => { if (el) el.style.height = el.offsetWidth }}
        style={{ backgroundColor: '#ddd' }}
        src={forceSrc || this.state.src}
        {...props}
      />
    )
  }
}

export default Avatar