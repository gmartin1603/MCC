import React from 'react';
import logo from '../assets/logo_transparent.png'

function Header(props) {
    const styles = {
        main:`w-screen flex justify-around items-center h-min bg-blue`,
        logoCont:`bg-clearBlack w-[10%]`,
        logo:`object-cover`,
    }
    return (
        <div className={styles.main}>
            <div className={styles.logoCont}>
                <img className={styles.logo} src={logo} alt="logo" />
            </div>
            <h1 className={`text-4xl font-bold`}>Martin Solutions LLC</h1>
        </div>
    );
}

export default Header;