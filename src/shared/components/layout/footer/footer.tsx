import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-copyright'>
                <p>
                    @{new Date().getFullYear()} Xavier Mejia. All right reserved.
                </p>
            </div>
            <div className="socialmedia">
            <a href="https://github.com/xavierms" target='_blank'><p><img src={"./src/assets/github.png"} alt="GitHub" /></p></a>
            <a href="https://www.linkedin.com/in/xavier-mejia-sanchez-5a6b70b4/" target='_blank' ><p><img src={"./src/assets/linkedin.png"} alt="LinkedIn" /></p></a>
            </div>

        </footer>
    )
}

export default Footer;