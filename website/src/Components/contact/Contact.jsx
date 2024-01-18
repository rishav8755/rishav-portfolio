import  { useRef } from 'react'
import emailjs from "emailjs-com"
import "./contact.css"
import {AiOutlineMail} from "react-icons/ai"
import {SiMessenger} from "react-icons/si"
import {BsWhatsapp} from "react-icons/bs"
const Contact = () => {
const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ndoy5pa', 'template_rk7vkvc', form.current, '4ezN6xde_ojh7OL4h')
       e.target.reset();
  };
  
  return (
    <section id='contact'>
       <h5>Det In Touch</h5>
       <h2>Contact Me</h2>


       <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>rishavpatel654@gmail.com</h5>
            <a href="mailto:rishavpatel654@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>

          

          <article className='contact__option'>
            < SiMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Rishav Patel</h5>
            <a href="http://m.me/ernest.achiever" target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            < BsWhatsapp className='contact__option-icon'/>
            <h4>whatsApp  </h4>
            <h5>8755613814 </h5>
            <a href="https://api.whtasapp.com/+918755613814" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        
        {/* End Of Contact Option */}
          <form  ref={form} onSubmit={sendEmail} >  
<input type="text" name='name' placeholder='your full name' required/>
<input type="text" name='email' placeholder='your email' required />
<textarea name="message" id="7"  placeholder='your message' required></textarea>
<button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
       </div>
      
    </section>
  )
  }

export default Contact
