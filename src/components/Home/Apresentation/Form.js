import React from 'react'

// Styles
import './Form.css'

const Form = () => (
  <form class='Form'>
    <dl>
      {/* Nome completo */}
      <dt>
        <label htmlFor='#userName'>Nome completo:</label>
      </dt>
      <dd>
        <input type='text' id='userName' placeholder='Fulano de Tal' />
      </dd>

      {/* Nome de usuário */}
      <dt>
        <label htmlFor='#userUsername'>Nome de usuário:</label>
      </dt>
      <dd>
        <input type='text' id='userUsername' placeholder='fulano' />
      </dd>

      {/* E-mail */}
      <dt>
        <label htmlFor='#userEmail'>E-mail:</label>
      </dt>
      <dd>
        <input type='email' id='userEmail' placeholder='fulano@exemplo.com' />
      </dd>

      {/* Senha */}
      <dt>
        <label htmlFor='#userPassword'>Senha:</label>
      </dt>
      <dd>
        <input type='password' id='userPassword' placeholder='Senha secreta' />
      </dd>
    </dl>
    <button className='form-btn'>
      Registrar-se
    </button>
  </form>
)

export default Form