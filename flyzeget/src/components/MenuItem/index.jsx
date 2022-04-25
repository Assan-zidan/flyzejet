import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const MenuItem = (props) => {
   const {
      name,
      subMenu,
      to,
      iconClassName,
      onClick,
      toolTipName,
      onClickIcon,
   } = props
   const [expand, setExpand] = useState(false)
   let activeStyle = {
      color: 'white',
   }
   return (
      <li onClick={onClick}>
         <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={to}
            className="menu-item"
            onClick={() => setExpand(!expand)}
         >
            <div className="menu-item-icon">
               <i class={iconClassName}></i>
            </div>
            <div className="menu-item-group">
               <div className="menu-item-name">{name}</div>
               {subMenu && subMenu.length > 0 ? (
                  expand ? (
                     <i onClick={onClickIcon} className="fa fa-angle-up"></i>
                  ) : (
                     <i onClick={onClickIcon} className="fa fa-angle-down"></i>
                  )
               ) : null}
            </div>
         </NavLink>
         <div class="tool_tip">{toolTipName}</div>
         {subMenu && subMenu.length > 0 ? (
            <ul className={`sub-menu ${expand ? 'activer' : ''}`}>
               {subMenu.map((menu, index) => (
                  <li key={index}>
                     <NavLink
                        style={({ isActive }) =>
                           isActive ? activeStyle : undefined
                        }
                        to={menu.to}
                        onClick={() => setExpand(false)}
                     >
                        {menu.name}
                     </NavLink>
                  </li>
               ))}
            </ul>
         ) : null}
      </li>
   )
}
export default MenuItem
