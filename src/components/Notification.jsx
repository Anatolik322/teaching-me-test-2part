import React from 'react'

function Notification() {
  return (
    <div className='notification_wrapper'>
      <div className='notification_inner'>
        <img src="./schedule.png" alt="schedule" />
        <div className='notification_main'>
            <h3 className='notification_header'>Reguest for the lesson</h3>
            <p className='notification_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <span className='notification_date'>17 Dec, 14:10pm, 2022</span>
        </div>
        <img src="./icon-x.png" alt="x" id='cross'/>
      </div>
      <div className='notification_buttons'>
        <button className='notification_view_btn'>View details</button>
        <button className='notification_submit_btn'>Submit</button>
      </div>
    </div>
  )
}

export default Notification
