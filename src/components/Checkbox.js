import React from 'react'
import createClassName from '../utils/createClassName'
import './Checkbox.css'

const Checkbox = ({ checked, ...props }) => (
  <div
    {...props}
    data-checked={checked}
    className={createClassName([
      'Dashboard_Checkbox',
      checked ? 'actived' : null
    ])}
  >
  </div>
)

export default Checkbox