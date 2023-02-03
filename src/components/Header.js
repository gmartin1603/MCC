import React from 'react';
import logo from '../assets/logo_transparent.png'
import { Link } from 'react-router-dom'

function Header(props) {
    const styles = {
        main:`w-screen flex justify-around items-center h-[12%] bg-blue`,
        logoCont:`bg-clearBlack w-[10%]`,
        logo:`object-cover`,
    }
    return (
        <div className={styles.main}>
            <div className={styles.logoCont}>
                <Link to="/">
                    <img className={styles.logo} src={logo} alt="logo" />
                </Link>
            </div>
            <>
            <h1 className={`text-4xl font-bold`}>George Martin</h1>
            <p>Cedar Rapids, IA</p>
            </>
        </div>
    );
}

export default Header;