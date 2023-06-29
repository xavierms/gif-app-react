import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt as fabGithubAlt,faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
            <a href="https://github.com/xavierms" target='_blank'><FontAwesomeIcon icon={fabGithubAlt} /></a>
            <a href="https://www.linkedin.com/in/xavier-mejia-sanchez-5a6b70b4/" target='_blank' ><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>

        </footer>
    )
}

export default Footer;