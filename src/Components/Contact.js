import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer';
import axios from 'axios'
function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [text, setText] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('', { name, email, text })
      .then(res => console.log(res))
      .catch(err => console.log(err));

  }

  return (
  <>
      <div className="contact">
        <div className='d-flex justify-content-center align-items-center vh-100 '>
          <div className='box2 p-3 rounded w-25 '>

            <form action="" onSubmit={handleSubmit}>

              <div className="mb-3">
                <p className='text-center'><strong>Name Here</strong></p>
                <input type="text" className='form-control rounded' name="name" placeholder='Enter Your Name' onChange={e => setName(e.target.value)} />


              </div>
              <div className='mb-3'>
                <p className='text-center'><strong>Email Here!</strong></p>
                <input type="email" className='form-control rounded' placeholder='UserEmail' name="email" onChange={e => setEmail(e.target.value)} />

                <p>We will never share your email with anyone else</p>
              </div>
              <div className='mb-3'>
                <p className='text-center'><strong>Text Here!</strong></p>
                <input type="text" className='form-control rounded' placeholder='Text Me' name="text" onChange={e => setText(e.target.value)} />

              </div>
              <button type='submit' className='btn btn-success w-100'>Message Me</button>



            </form>

          </div>
          </div>
          </div>
          
        </>
        )
}

        export default Contact
