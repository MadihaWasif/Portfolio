import React from 'react'
import img from './img.jpg'

function Home() {
  return (
    <>
      <div>
        <br /><br />
        <div class="container border-black-3">
          <div class="row justify-content-center">

            <div class="col-md-6">
              <div className="row justify-content-center">
                <div className="col-4 me-5">
                  <img src={img} alt="" className='rounded' style={{ width: '12em', height: '10em' }} />
                </div>
                <div className="col-4">
                  <p><h5>Name: Madiha</h5></p>
                  <p><h5>Profile: Fresher</h5></p>
                  <p><h5>Contact Number: +91 6386860010</h5></p>
                  <p><h5>Email: madeehawasif859@gmail.com</h5></p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div className='container ms-4' style={{fontSize: '1em', fontFamily: 'cursive'}}>
                <center><h3>Introduction</h3></center>
                Hello Everyone, This is Madiha. I am persuing B.Tech from Shri Ramswaroop Memorial College Of Engineering and Managemnet. I have done my schooling from Prioneer Montessori Inter College. <br />
                I am intrested to deploy my skills in such a organization which can absorb my full energy in point of work. I am a very hard working person and i was also top-list student of my school and college.
                I am open to learn new things. This gives me motivation to go forward and to face challeneges in my life.. Also I am very fast learner new technologies. I can easily learn new things rapidly with 100% focus.
                <br />
                I have good-knowledge of Java(Programming Language), Database(MySQL-to store the clients data), ReactJS(A Frontend Libraray for Application Interface) and Few Backend Technoloies.
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      

    </>
  )
}

export default Home


