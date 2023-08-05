import React, { useRef } from 'react'
import "./Join.css"
import emailjs from 'emailjs-com'

const Join = () => {
 const form = useRef() 
 const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_g1fimz3', 'template_f9pv2mr', form.current, 'KAu6icLGOYxF_XYCX')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

  return (
    <div className='join' id='join-us'>
    {/* the right side */}
       <div className='left-j'>
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
       {/* the right side */}
       <div className='right-j'>
        <form onSubmit={sendEmail} ref={form} className='email-container' action=''>
            <input type="email" name="user_email" placeholder='Enter your Email' />
            <button className='btn btn-j'>Join Now</button>
        </form>
       </div>
    </div>
  ) 
}

export default Join
