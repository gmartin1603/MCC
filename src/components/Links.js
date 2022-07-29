import React from 'react';
import { Link, Outlet } from 'react-router-dom'

function Links(props) {
    const subTabs = [
        {label:"Progessive Web Apps", route:"webApps"},
        {label:"Web3", route:"web3"},
        // "Android/ios Apps",
        // "PLC Automation",
    ]
    const styles = {
        main:``,
    }
    return (
        <div className={styles.main}>
            {subTabs.map(link => (
                <Link to={link.route} key={link.route}>
                    {link.label}
                </Link>
            ))}
            <Outlet/>
        </div>
    );
}

export default Links;