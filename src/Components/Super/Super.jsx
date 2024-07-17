import React from 'react'
import './Super.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

const Super = ({count,setCount,Data,playStatus,setPlayStatus}) => {
  return (
    <div className='super'>
      <div className="hero">
        <div className="hero-text">
            <p>{Data.text1}</p>
            <p>{Data.text2}</p>
        </div>
        <div className="hero-explore">
            <p>Explore features</p>
            <img src={arrow_btn} alt="" />
        </div>
        <div className="hero-dot-play">
            <ul className="hero-dots">
                <li onClick={()=>setCount(0)} className={count===0?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=>setCount(1)} className={count===1?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=>setCount(2)} className={count===2?"hero-dot orange":"hero-dot"}></li>
            </ul>
            <div className="hero-play">
                <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="" />
                <p>See the Video</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Super
