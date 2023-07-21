import Linkedin from '../../asset/images/logo_linkedin.png';
import LogoMail from '../../asset/images/logo_mail.png';
import LogoGit from '../../asset/images/logo_github.png';
import LogoTel from '../../asset/images/logo_tel.png';
import './Contact.scss';
function Contact() {
  return (
    <div className="Contact">
      <div className="Contact-contener">
        <h2>Contact</h2>
        <div className='Contact_list'>
          <ul>
            <li>
            <img src={LogoMail} alt="logo_mail" />
              colin-kevin@outlook.fr
            </li>
            <li>
            <img src={LogoTel} alt="logo_tel" />
              07.60.69.52.84
            </li>
            <li>
            <img src={LogoGit} alt="logo_github" />
              <a href="https://github.com/Shinra88">https://github.com/Shinra88</a>
            </li>
            <li>
              <img src={Linkedin} alt="logo_Linkedin" />
              <a href="https://www.linkedin.com/in/kevin-colin-07390b16b">https://www.linkedin.com/in/kevin-colin-07390b16b</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;