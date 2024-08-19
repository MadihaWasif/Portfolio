import React from 'react'

function Footer() {
    return (
        <div>
            <div className="foot ">
                <div className="card bg-dark text-light text-center">
                    <div className="card-header fs-3 text-decoration-underline">
                        Contact Us
                    </div>
                    <br /><hr />
                    <div className="card-body mb-5">
                        <div>
                            <i className="bi bi-whatsapp mb-5 fs-4 me-3"></i> <span className='fs-4 page'>
                            +91 6386860010</span>
                        </div>
                        <div>
                            <i className="bi bi-linkedin mb-5 fs-4 me-3"></i><span className='fs-4 page'>linkedin.com/in/madiha-wasif-0ab2b8256</span>
                        </div>
                        <div>
                            <i className="bi bi-mailbox fs-4 mb-5 me-2"></i> <span className='fs-4 page'>madeehawasif859@gmail.com</span>
                        </div>
                        <br />
                        <h5 className="card-title">Follow For More</h5>
                        <p className="card-text">Contact Us : +91 6386860010, +91 6387648713</p>
                        
                    </div>
                    <div className='page text-center fs-2 text-warning'>ThankYou!</div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer
