import React from 'react'
import Footer from './Footer'


const FILE_PDF = 'http://localhost:3000/Madiha_resume.pdf'

function About() {

    
    const handleFile = (url) => {
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };
    
    return (
        <>
            <div className="about">
                <div className="container ms-5 mt-3">
                    <br /><br />
                    <h3 className='ms-5 mt-5'>INTRODUCTION</h3>
                    <br />
                    <hr />
                    <br />
                    <p className='text ms-5'>Overview.</p>
                    <p className='ms-5 fs-4' >I am proficient in Java, and JavaScript. However, I believe that being a versatile engineer is crucial, so I’m always open to learning new languages and technologies.<br />
                        I have also created few projects with technologies included: Node.js, MySQL database, Express.js and React.js <br />
                        I am very hard-working person and open to learning new technologies, I gave my 100% to my work and I believe that I will give my 100% to my work<br />
                        <u>"I hope that this will find me well for this opportunity." </u></p>




                </div>
            </div>
            <br /><br />
            <hr />
            <br /><br />
            <div className='ms-5'>
                <h2 className='ms-5'>TECNOLOGIES</h2>
                <div className="container">
                    <div className="row gx-0 align-item-center">

                        <div className="col-md-3">
                            <div className="box1 card w-50 border-dark m-5 text-light bg-dark" >
                                <p className='card-text ps-3 pt-2  fs-4' style={{ fontFamily: 'cursive' }}>CORE JAVA</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="box1 card w-50 border-dark m-5 text-light bg-dark">
                                <p className='card-text ps-5 pt-2  fs-4' style={{ fontFamily: 'cursive' }}>HTML</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="box1 card w-50 border-dark m-5 text-light bg-dark" >
                                <p className='card-text ps-5 pt-2  fs-4' style={{ fontFamily: 'cursive' }}>CSS</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="box1 card w-75 border-dark m-5 text-light bg-dark">
                                <p className='card-text ps-5 pt-2  fs-4' style={{ fontFamily: 'cursive' }}>JAVASCRIPT</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="box1 card w-50 border-dark m-5 text-light bg-dark" >
                                <p className='card-text ps-5 pt-2  fs-4' style={{ fontFamily: 'cursive' }}>MySQL</p>
                            </div>
                        </div>
                        
                        <div className="col-md-3">
                            <div className="box1 card w-75 border-dark m-5 text-light bg-dark" >
                                <p className='card-text ps-5 pt-2  fs-4' style={{ fontFamily: 'cursive' }}>REACT.JS</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="box1 card w-75 border-dark m-5 text-light bg-dark" >
                                <p className='card-text ps-5 pt-2  fs-4' style={{ fontFamily: 'cursive' }}>NODE.JS</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="box1 card w-75 border-dark m-5 text-light bg-dark" >
                                <p className='card-text ps-5 pt-2  fs-4' style={{ fontFamily: 'cursive' }}>EXPRESS.JS</p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
            <br /><br />
            <hr />
            <div className='text-center'>
                <p className='page fs-5'>Explore the Technologies and Skills Of Madiha Wasif...</p><br />
                <button className='btn btn-primary fs-4' onClick={ ()=> { handleFile(FILE_PDF);}}>Download Resume</button>
            </div>
            <br /><br />
       

           
            </> 

       
    )
}

export default About
