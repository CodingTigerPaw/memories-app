import React from 'react'
import menuStyles from '../styles/menu.module.scss'
import {Link} from 'react-router-dom'

import text from '../constants/texts'

const {listItems} = text

 const Menu = () => {

  return (
    <div className={menuStyles.menu}>
      <ul className={menuStyles.menuList}>
          {listItems.map( el =>{
            return(
              <Link className={menuStyles.menuItem} to={el.path}>{el.name}</Link>
            )
      
          })}
      </ul>

    </div>
  )
}

export default Menu