import logoImagen from '../../../assets/logos--instagram1.png'
import './Logo.css';

const Logo = () => {

    return(
        <div className='logo'>
            <img src={logoImagen} alt="" />
        </div>
    );

}

export default Logo;