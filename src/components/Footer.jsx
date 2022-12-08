import React from 'react'
import '../css_files/footer.css'

const Footer = () => {
  return (
    <>

    <div className='footer'>

    

    <div className='footer-details'>
        <div className='contact'>
            <h4>Contact Us</h4>
            <ul>
                <li>Email</li>
                <li>Mobile</li>
                <li>Address</li>
                <li>Fax</li>
            </ul>

        </div>

        <div className='about'>
            <h4>About Us</h4>
            <ul>
                <li>Who we are</li>
                <li>What we provide</li>
                <li>Services</li>
                <li>More</li>
            </ul>

        </div>

       
    </div>
    <h3>Copyright: All Rights are Reserved</h3>
    </div>
    </>
  )
}

export default Footer;