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

            <div className='logo_liens'>

              <div className='logo_mail'>
                <img src={LogoMail} alt="logo_mail" />
              </div>
              
              <div className='logo_tel'>
                <img src={LogoTel} alt="logo_tel" />
              </div>
              
              <div className='logo_github'>
                <img src={LogoGit} alt="logo_github" />
              </div>
              
              <div className='logo_linkedin'>
                <img src={Linkedin} alt="logo_linkedin" />
              </div>
            </div>

            <div className='liens'>
              
              <div className='mail'>
                <ButtonMailto label="colin-kevin@outlook.fr" mailto="mailto:colin-kevin@outlook.fr" />
              </div>
              
              <div className='tel'>
                <p>07.60.69.52.84</p>
              </div>
              
              <div className='github'>
                <a href="https://github.com/Shinra88">https://github.com/Shinra88</a>
              </div>
              
              <div className='linkedin'>
                <a href="https://www.linkedin.com/in/kevin-colin-07390b16b">https://www.linkedin.com/in/kevin-colin-07390b16b</a>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;