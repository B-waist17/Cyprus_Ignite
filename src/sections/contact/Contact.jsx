import React from 'react'
import './contact.css'
import { useState } from 'react'
//import emailjs from ''


const Contact = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
       // console.log(name, email, number, subject, message)
       const serviceId = 'service_jrf9m0o'
       const templateId = 'template_zk55vfj'
       const publicKey = 'JFLJ58mI60tlyiGe6'

       const templateParams = {
        from_name: name,
        from_email: email,
        from_number: number,
        the_subject: subject,
        message: message,
        to_name: 'Ranye Udi',
       }

     /*  emailjs.send(serviceId, templateId, templateParams, publicKey)
       .then((response) => {
        console.log('EMAIL SENT SUCCESSFULLY!', response.status, response.text)
        setName('')
        setEmail('')
        setNumber('')
        setSubject('')
        setMessage('')
       })
       .catch((err) => {
        console.log('EMAIL SENDING FAILED...', err)
       }) */
    } 
  return (
    <div className="contactContent">
       <div className='contactForm'>
           
            <form action="submit">
                <div className='inputs'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className='inputs'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='inputs'>
                    <label htmlFor="number">Phone Number</label>
                    <input type="number" id='number' value={number} onChange={(e) => setNumber(e.target.value)} required />
                </div>
                <div className='inputs'>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id='subject' value={subject} onChange={(e) => setSubject(e.target.value)} required />
                </div>
                <div className='inputs'>
                    <label htmlFor="message">Message</label>
                    <textarea id='message' value={message} onChange={(e) => setMessage(e.target.value)} required ></textarea>
                </div>
                
                <button type='submit' onClick={handleSubmit} className='bt'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
