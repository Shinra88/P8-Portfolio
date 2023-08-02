import Linkedin from '../../asset/images/logos/logo_linkedin.png';
import LogoMail from '../../asset/images/logos/logo_mail.png';
import LogoGit from '../../asset/images/logos/logo_github.png';
import LogoTel from '../../asset/images/logos/logo_tel.png';
import ButtonMailto  from '../../components/mailto/MailTo';
import './Contact.scss';
function Contact() {
  return (
    <div className="Contact">
      <div className="Contact-contener">
        <h2>Contact</h2>
        <div className='Contact_list'>
              <div className='liens'>
              <ul>
              <li>
              <img src={LogoMail} alt="logo_mail" />
                <span><ButtonMailto label="colin-kevin@outlook.fr" mailto="mailto:colin-kevin@outlook.fr" /></span>
              </li>

              <li>
              <img src={LogoTel} alt="logo_tel" />
              <span><p>07.60.69.52.84</p></span>
              </li>

              <li>
              <img src={LogoGit} alt="logo_github" />
              <span><a href="https://github.com/Shinra88">https://github.com/Shinra88</a></span>
              </li>

              <li>
              <img src={Linkedin} alt="logo_linkedin" />
                <span><a href="https://www.linkedin.com/in/kevin-colin-07390b16b">https://www.linkedin.com/in/kevin-colin-07390b16b</a></span>
              </li>
            </ul>
            </div>
            </div>
        </div>
      </div>
  );
}

export default Contact;