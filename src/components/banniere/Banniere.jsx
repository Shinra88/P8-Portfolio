import Portrait from '../../asset/images/portrait.png';
import './Banniere.scss';

function Banner() {

    return (
            <div className='Banniere_contener'>
                <div className='Portrait_contener'>
                    < a href="/">
                        <img src={Portrait} className='Portrait' alt="Portrait"/>
                    </a >
                    <h2>COLIN Kévin</h2>
                </div>
            </div>
            );
}
  
export default Banner;