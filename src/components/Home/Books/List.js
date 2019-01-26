import React from 'react'

// Components
import ListItem from './ListItem'

// Styles
import './List.css'

const bookInformations = [{
    cover: require('../../../images/covers/a-mao-e-a-luva.png'),
    title: 'A Mão e a Luva'
  }, {
    cover: require('../../../images/covers/dom-casmurro.png'),
    title: 'Dom Casmurro'
  }, {
    cover: require('../../../images/covers/esau-e-jaco.png'),
    title: 'Esaú e Jacó'
  }, {
    cover: require('../../../images/covers/helena.png'),
    title: 'Helena'
  }, {
    cover: require('../../../images/covers/iaia-garcia.png'),
    title: 'Iaiá Garcia'
  }, {
    cover: require('../../../images/covers/memorial-de-aires.png'),
    title: 'Memorialde Aires'
  }, {
    cover: require('../../../images/covers/memorias-postumas-de-bras-cubas.png'),
    title: 'Memórias Póstumas de Brás Cubas'
  }, {
    cover: require('../../../images/covers/quincas-borba.png'),
    title: 'Quincas Borba'
  }, {
    cover: require('../../../images/covers/ressurreicao.png'),
    title: 'Ressurreição'
}]

const List = () => (
  <ul className='Home_Books_List'>
    {bookInformations.map((information, index) => (
      <ListItem
        key={index}
        coverUrl={information.cover}
        bookTitle={information.title}
      />
    ))}
  </ul>
)

export default List