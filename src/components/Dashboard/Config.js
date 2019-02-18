import React, { Component } from 'react'
import { database, storage } from 'firebase'

// Components
import Avatar from '../Avatar'

// Styles
import './Config.css'

const AVATAR = 'avatar'
const NAME = 'name'
const IMG_WIDTH = 200

const ConfigItem = ({
  title,
  children
}) => (
  <div className='Dashboard_Config-item'>
    <h1 className='Dashboard_Config-itemTitle'>{ title }:</h1>
    { children }
  </div>
)

class Config extends Component {
  constructor(props) {
    super(props)

    // Bind
    this.updateUserName = this.updateUserName.bind(this)
    this.updateUserAvatar = this.updateUserAvatar.bind(this)
    this.saveChanges = this.saveChanges.bind(this)

    // State
    this.state = {
      userName: this.props.name,
      userAvatar: undefined,

      // Valores padrões para checar posteriormente.
      defaultUserName: this.props.name,
      defaultUserAvatar: undefined
    }
  }
  updateUserName({ target: { value } }) {
    this.setState({
      userName: value
    })
  }
  updateUserAvatar(event) {
    const files = event.target.files
    const file = files[0]

    if (files.length > 1) {
      window.alert('Envie só um arquivo, por favor.')
      return 
    }

    if (!file) {
      window.alert('Algo de errado ao enviar a imagem.')
      return
    }

    // O arquivo passado deve ser uma imagem (JPEG ou PNG).
    if (
      file.type !== 'image/jpeg' &&
      file.type !== 'image/jpg' &&
      file.type !== 'image/png'
    ) {
      window.alert('Formato de arquivo inváldo!')
      return
    }

    const fr = new FileReader()

    fr.onload = () => {
      const img = new Image()
      img.src = fr.result
      img.onload = () => {
        const { width, height } = img
        
        if (width == IMG_WIDTH && height == IMG_WIDTH) {
          this.setState({
            userAvatar: fr.result
          })
        } else {
          window.alert('Dimensões inválida!')
          return
        }
      }
    }
    fr.readAsDataURL(file)
  }
  saveChanges(event) {
    event.preventDefault()

    // ATUALIZAR: Nome do usuário
    if (this.state.userName !== this.state.defaultUserName) {

      // Caso o usuário tenha passado um nome vazio.
      if (this.state.userName.length === 0) {
        window.alert('Um nome é obrigatório!')
        return
      }

      // Caso [maxLength] tenha sido burlado.
      if (this.state.userName.length > 25) {
        window.alert('O nome não pode ter mais de 25 caracteres.')
        return
      }

      database().ref(`users/${this.props.uid}/name`).set(this.state.userName)
    }

    // ATUALIZAR: Avatar do usuário
    if (this.state.userAvatar !== this.state.defaultUserAvatar) {

      // Não é enviado a extensão do arquivo para não causar confusões
      storage()
        .ref()
        .child(`${this.props.uid}`)
        .putString(this.state.userAvatar, 'data_url')
        .then(() => {
          window.location.reload()
        })
    }
  }
  render() {
    return (
      <div className='Dashboard_Config'>
        <form className='Dashboard_Config-form'>

          {/* Nome */}
          <ConfigItem title='Nome'>
            <input
              className='Dashboard_Config-input'
              value={this.state.userName}
              onChange={this.updateUserName}
              maxLength="25"
              type='text'
              placeholder='Nome...'
            />
            <small className='Dashboard_Config-obsMsg'>
              <b>Caracteres:</b> {this.state.userName.length}-25
            </small>
          </ConfigItem>

          {/* Foto do perfil */}
          <ConfigItem title='Foto do perfil'>
            <div className='Dashboard_Config-specialInline'>
              <Avatar
                className='Dashboard_Config-configAvatar'
                uid={this.props.uid}
                forceSrc={this.state.userAvatar}
              />

              {/* Essa <div> é apenas para encapsular dentro do flexbox */}
              <div>
                <input
                  onChange={this.updateUserAvatar}
                  type='file'
                />
                <small className='Dashboard_Config-obsMsg'>
                  A imagem de usuário deve ser 200x200.<br />
                  Redimensione-a antes de tentar fazer <i>upload</i>.
                </small>
              </div>
            </div>
          </ConfigItem>

          <button
            className='btn'
            onClick={this.saveChanges}
          >
            Salvar alterações
          </button>
        </form>
      </div>
    )
  }
}

export default Config