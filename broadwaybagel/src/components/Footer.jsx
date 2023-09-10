import React from 'react'

const Footer = () => {
    const getYear = () => {
        return new Date().getUTCFullYear()
    }

    return (
        <div>
            <footer className="footer">
                © {getYear()} Cherch, all rights reserved.
                <a className="footerLink" target="_blank" href="mailto:accawebdevelopment@gmail.com">CONTACT</a>
            </footer>
        </div>
    )
}

export default Footer
