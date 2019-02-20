import React, { Component } from 'react'
import { storage } from 'firebase'

class Avatar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.imgElement = React.createRef()
    this.updateImgHeight = this.updateImgHeight.bind(this)

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
  componentDidMount() {
    this.updateImgHeight()
    window.addEventListener('resize', this.updateImgHeight)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateImgHeight)
  }
  updateImgHeight() {
    this.imgElement.current.style.height = this.imgElement.current.offsetWidth
  }
  render() {
    const { forceSrc, ...props } = this.props

    return (
      <img
        ref={this.imgElement}
        style={{ backgroundColor: '#ddd' }}
        src={forceSrc || this.state.src}
        {...props}
      />
    )
  }
}

export default Avatar