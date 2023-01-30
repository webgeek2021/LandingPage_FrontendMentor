import React from 'react'
import logo from '../assets/images/logo.svg'
import todo from '../assets/images/icon-todo.svg'
import calendar from '../assets/images/icon-calendar.svg'
import reminders from '../assets/images/icon-reminders.svg'
import planning from '../assets/images/icon-planning.svg'
import menuIcon from '../assets/images/icon-menu.svg'
import CloseMenuIcon from '../assets/images/icon-close-menu.svg'
import Dropdown from './Dropdown'

const Header = () => {

    const [active, setActive] = React.useState()
    const [openSidebar , setSidebar] = React.useState(false)

    const features = [
        { option: "Todo List", icon: todo },
        { option: "Calendar", icon: calendar },
        { option: "Reminders", icon: reminders },
        { option: "Planning", icon: planning },
    ]
    const company = [
        { option: "History" },
        { option: "Our Team" },
        { option: "Blog" },
    ]

    const handleActiveDrop = (id) => {
        if (id === active) {
            setActive("")
        }
        else {
            setActive(id)
        }
    }
    const handleSidebar = () =>{
        setActive("")
        setSidebar(prev => !prev)
    }
    return (
        <header>
                <img src={logo} alt="company-logo" className='logo' />
            {/* <div className='left-container'> */}
                <nav className={`${openSidebar ? 'sidebar-active' : 'sidebar-inactive'}`}>
                    <div className='drop-down'>
                    <Dropdown
                        title="Features"
                        listArr={features}
                        activeNav={active}
                        setActiveNav={handleActiveDrop}
                        id={"FEATURES"}
                    />
                    <Dropdown
                        title="Company"
                        listArr={company}
                        activeNav={active}
                        setActiveNav={handleActiveDrop}
                        id={"COMPANY"}
                    />
                    <Dropdown
                        title="Careers"
                        activeNav={active}
                        setActiveNav={handleActiveDrop}
                        id={"CAREERS"}
                    />
                    <Dropdown
                        title="About"
                        activeNav={active}
                        setActiveNav={handleActiveDrop}
                        id={"ABOUT"}
                    />
                    </div>
                <div className='auth-btn'>
                    <button >Login</button>
                    <button className='common-border-btn'>Register</button>
                </div>
                <img src={CloseMenuIcon} className="close-men-icon" alt="menu-icons" onClick={handleSidebar} />
                </nav>
            {/* </div> */}

    
            <img src={menuIcon} className="menu-icons" alt="menu-icons" onClick={handleSidebar}/>
        </header>
    )
}

export default Header