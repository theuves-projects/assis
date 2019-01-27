import React from 'react'

// Styles
import './Footer.css'

// Images
import imgPublicDomain from '../../images/Home_Footer-public-domain.png'

const links = [{
  title: 'Entrar na sua conta',
  url: '/'
}, {
  title: 'Registrar-se',
  url: '/'
}, {
  title: 'Lista de livros',
  url: '/'
}, {
  title: 'Sobre o autor',
  url: '/'
}]

const Footer = () => (
  <footer className='Home_Footer'>
    <div className='container'>
      <div className='Home_Footer-itens'>

        {/* Item 1 */}
        <div className='Home_Footer-item'>
          <h3 className='Home_Footer-title'>Links</h3>
          <ul className='Home_Footer-list'>
            {links.map((link) => (
              <li className='Home_Footer-list-item'>
                <a
                  className='Home_Footer-link'
                  href={link.url}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Item 2 */}
        <div className='Home_Footer-item'>
          <img
            className='Home_Footer-img--public-domain'
            src={imgPublicDomain}
            alt='Marca do Domínio Público'
          />
        </div>

        {/* Item 3 */}
        <div className='Home_Footer-item'>
          <adress className='Home_Footer-adress'>
            Copyright &copy; 2019 by <a href='mailto:theuves@gmail.com'>Matheus Alves</a>.<br />
            Desenvolvido em Dourados-MS, Brasil.<br />
            Veja o <a href='https://github.com/thevues/assis'>código-fonte</a>.
          </adress>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer