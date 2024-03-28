import React from 'react'
import './Join.css'

const Join = () => {

  return (
    <div className='Join' id='join-us'>
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            
            <form className='email-container' action="https://api.web3forms.com/submit" method="POST">
                {/* <input type="hidden" name="redirect" value="https://souravs72.github.io/portfolio" /> */}

                <input type="hidden" name="access_key" value="1d8ea877-6203-49c7-a1ff-c9ddcd640b27" />
                <input type="email" name='user_email' placeholder='Enter your Email address' />
                <button className='btn btn-j'>Join now</button>
            </form>
        </div>
    </div>
  )
}

export default Join
