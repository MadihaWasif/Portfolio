import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className='mt-3'>
      <div class="container border-black-3">
        <div class="row justify-content-center">

          <div class="col-md-4">
            <u><h4 style={{ fontFamily: 'monospace' }}>My Projects</h4></u>
            <br /><br />

            <dl>
            <h5><dd>Food-App</dd></h5>
            <dt>
            https://frontfood-mnbi.onrender.com/
            </dt>
              
            </dl>

            <dl>
              <h5><dd>Crud-App</dd></h5>
              <dt>Frontend- It is build with using <u>ReactJs</u> for User Interface.
              Backend- <u>NodeJs</u> and ExpressJs 
              Database- <u>MySQL</u>
              
              </dt>
            </dl>

            

            <dl>
              <h5><dd>Shop-App</dd></h5>
              <dt>Frontend- It is build with using <u>ReactJs</u> for User Interface.
              Backend- <u>NodeJs</u> and ExpressJs 
              Database- <u>MySQL</u>
              
              </dt>
            </dl>

          </div>

          
          <div class="col-md-5">
            <div className="project text-light">
              <br /><br /><br />
              <div className="container">
                <h1 className='head text-center'>My Work</h1>
                <br />
                <p className="head text-center">Here are my some projects shown <br />
                  one by one as you can go through the link <br />
                  given down below. You can explore my projects. <br />
                  I used to make my projects with web development, Database and Node.js technology.
                </p>
                <br /><br /><br />
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>



  )
}

export default Projects
