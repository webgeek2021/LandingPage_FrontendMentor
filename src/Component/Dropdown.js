import React from 'react'
import arrowDown from '../assets/images/icon-arrow-down.svg'
import arrowUp from '../assets/images/icon-arrow-up.svg'
const Dropdown = (props) => {

    const list = props.listArr?.map((li)=>{
        console.log(li)
        return (
            <li className='dropdown-li'>
                <a href="#action">
                {li.icon ? <img src={li.icon} alt="list-icon"/> : ""}
                <span>{li.option}</span>
                </a>
            </li>
        )
    })

  return (
    <div className={`custom-dropdown ${props.activeNav === props.id ? "dropdown-active" : ""}`}>
        <div className={`dropdown-title ${props.activeNav === props.id ? 'active-title' : ""}`} onClick={()=>props.setActiveNav(props.id)}>
            <span>{props.title}</span>
            {props.listArr && <img src={props.activeNav === props.id ? arrowUp : arrowDown} alt="arrow-icon"/>}
        </div>
       { list && 
       <ul className={`${props.activeNav === props.id ? 'active' : 'not-active'}`} >
            {list}
        </ul>
        }
    </div>
  )
}

export default Dropdown