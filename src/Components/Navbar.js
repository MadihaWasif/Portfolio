import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom';
function Navbar() {
    const location = useLocation();
    useEffect(()=> {
        console.log(location);
    }, [location])

    const [color, setColor] = useState({
        backgroundColor: 'white',
        color: 'black'
    });

    const handleClick = () => {
        if (color.backgroundColor === 'white') {
            setColor ({
                backgroundColor: 'black',
                color: 'white'
            })
            document.body.style.backgroundColor= 'black'
            document.body.style.color= 'white'

        }
        else {
            setColor({
                backgroundColor: 'white',
            color: 'black'
            })
            document.body.style.backgroundColor= 'white'
            document.body.style.color= 'black'
        }

    }
    return (
        <div style={{color}} >
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand ms-3 fs-3" id='name' style={{fontFamily: 'cursive'}} to="/">Madiha Wasif</Link>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class={`nav-link ms-5 fs-4 ${location.pathname=='/'?"active":""}`} style={{fontFamily: 'cursive'}} id='home' aria-current="page" to="/">Home <i class="bi bi-house-door"></i></Link>
                            </li>
                            <li class="nav-item">
                                <Link class={`nav-link ms-5 fs-4 ${location.pathname=='/about'?"active":""}`} id='about' style={{fontFamily: 'cursive'}} to="/about">About <i class="bi bi-person-circle"></i></Link>
                            </li>
                            <li class="nav-item">
                                <Link class={`nav-link ms-5 fs-4 ${location.pathname=='/contact'?"active":""}`} id='cont' style={{fontFamily: 'cursive'}} to="/contact">Contact Us <i class="bi bi-chat-dots"></i></Link>
                            </li>
                            <li class="nav-item">
                                <Link class={`nav-link ms-5 fs-4 ${location.pathname=='/projects'?"active":""}`} id='details' style={{fontFamily: 'cursive'}} aria-disabled="true" to='/projects'>Projects <i class="bi bi-columns-gap"></i></Link>
                            </li>

                            

                            
                        </ul>
                    </div>
                </div>
                <button onClick={handleClick} className="btn btn-secondary me-5"><i class="bi bi-moon-stars-fill"></i></button>
                
            </nav>
        </div>
    )
}

export default Navbar
