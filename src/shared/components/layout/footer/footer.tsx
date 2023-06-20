import './footer.css';
import github from './../../../../assets/github.png';
import linkedin from './../../../../assets/linkedin.png';
const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-copyright'>
                <p>
                    @{new Date().getFullYear()} Xavier Mejia. All right reserved.
                </p>
            </div>
            <div className="socialmedia">
            <a href="https://github.com/xavierms" target='_blank'><p><img src={github} alt="GitHub" /></p></a>
            <a href="https://www.linkedin.com/in/xavier-mejia-sanchez-5a6b70b4/" target='_blank' ><p><img src={linkedin} alt="LinkedIn" /></p></a>
            </div>

        </footer>
    )
}

export default Footer;