import { } from 'react';
import Logo from '../../assets/images/logo.svg'

const Header = () => {
    return (
        <header className='flex justify-center'>
            <img src={Logo} className='h-10' alt="splitter" />
        </header>
    );
};

export default Header;