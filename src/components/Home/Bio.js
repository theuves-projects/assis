import React from 'react'
import './Bio.css'

import imgAuthor from '../../images/Home_Bio-author.jpg'

const Bio = () => (
  <section className='Home_Bio'>
    <div className="container">
      <article>
        <header className='Home_Bio-header'>
          <img className='Home_Bio-author' src={imgAuthor} />
          <h1 className='Home_Bio-title'>Quem é Machado de Assis?</h1>
        </header>
        <p className='Home_Bio-text'>
          José Maria Machado de Assis é filho de pai mulato carioca e mãe
          açoriana. O Escritor brasileiro nasceu no Rio de Janeiro em 1839 e
          morreu em 1908. Autodidacta e ambicioso, tornou-se um clássico da
          língua portuguesa. Os primeiros poemas foram publicados na imprensa,
          seguindo-se-lhes crónicas, contos, romances e ensaios críticos. O seu
          primeiro livro de poesias, Crisálidas, foi publicado em 1864 e o seu
          primeiro romance, Ressurreição, em 1872. Iniciando a sua actividade
          literária em pleno Romantismo, tornou-se o autor mais importante da
          nova estética do Realismo e foi ainda contemporâneo do Parnasianismo
          e do Simbolismo.
        </p>
      </article>
    </div>
  </section>
)

export default Bio