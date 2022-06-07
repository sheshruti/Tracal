import React from 'react'

function Navbar(props) {
    return(
        <nav className='nav'>
        <ul className="nav-list ">
            <div className="logo-icon">
                <img src= {props.img} alt="logo"/>

            </div>
            <li><a href="#home">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="#services">Food</a></li>
            <li><a href="exercise.html">Exercise</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="#contact">Contact us</a></li>
            
        </ul>
        <div ><button className="login-btn">Log in/SignUp</button></div>
                
        
    </nav>
    )
}
export default Navbar ;