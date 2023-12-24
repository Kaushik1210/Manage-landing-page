import React from 'react'
import './midsec.css'


const Midsec = () => {
  return (
    <div className='midsec'>
      <div className="midsec_left_content">
        <h1 className='title midlefttitle'>What’s different about Manage?</h1>
        <p className='para mdleftpara'>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
      </div>
      <div className="mid_right_content">
            <div className="1">
                <h4 className='title mdrighttitle1'>Track company-wide progress</h4>
                <p className='para mdrightpara'>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
            </div>
            <div className="2">
            <h4 className='title mdrighttitle2'>Advanced built-in reports</h4>
                <p className='para mdrightpara'>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
            </div>
            <div className="3">
            <h4 className='title mdrighttitle3'>Everything you need in one place</h4>
                <p className='para mdrightpara'>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
            </div>
      </div>
    </div>
  )
}

export default Midsec
