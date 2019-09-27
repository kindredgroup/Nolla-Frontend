import React from 'react';

const Header = () => {
    return(
        <header>
            <div className='header'>
                <img
                    className='headerImage'
                    src="kindredLogo.jpeg"
                    alt="kindredLogo"
                />
                <span className='headerTitle'>Kindred Twitter</span>
            </div>
        </header>
    );
}

export default Header;