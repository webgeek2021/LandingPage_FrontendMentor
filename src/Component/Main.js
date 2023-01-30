import React from 'react'
import Audiophile from '../assets/images/client-audiophile.svg'
import Databiz from '../assets/images/client-databiz.svg'
import Maker from '../assets/images/client-maker.svg'
import Meet from '../assets/images/client-meet.svg'
const Main = () => {
  return (
    <main className='main-container'>
        <div className='left-section'>
            <h1>Make <br/>remote Work</h1>
            <p>Gets your team in sync.no matter your location . Streamline processes, create team rituals, and watch productivity soar </p>
            <button className='common-btn'>Learn more</button>

            <div className='company-logos'>
                <img src={Databiz} alt={"company databiz"}/>
                <img src={Audiophile} alt={"company audiophile"}/>
                <img src={Meet} alt={"company meet"}/>
                <img src={Maker} alt={"company maker"}/>
            </div>

        </div>
        <div className='right-section'></div>
    </main>
  )
}

export default Main