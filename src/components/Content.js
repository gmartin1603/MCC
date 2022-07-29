import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Web3 from './Web3';
import WebApps from './WebApps';

function Content(props) {

    const tabs = [
        "Services",
        "Testimonials",
        "About",
    ]
    const subTabs = [
        "Progessive Web Apps",
        "Web3",
        "Android/ios Apps",
        "PLC Automation",
    ]

    const styles = {
        main:`m-.01 w-full max-w-[1200px] overflow-scroll rounded border-4 border-white shadow-md shadow-white bg-clickedBlue`,
        bar:`bg-white p-.01 sticky top-0 font-semibold text-xl flex justify-around`,
        subBar:`bg-clearBlack text-white p-.01 sticky top-[40px] font-semibold text-xl flex justify-around`,
        tab:``,
        content:`p-.02`,
    }
    return (
        <div className={styles.main}>
            <div className={styles.bar}>
                <Link
                to="services"
                >
                    Services
                </Link>
                <Link
                to="about"
                >
                    About
                </Link>
            </div>
            <div className={styles.subBar}>
                {/* { subTabs.map(tab => (
                ))} */}
                <Link
                to="services/webApps"
                >
                    Web Apps
                </Link>
                <Link
                to="services/web3"
                >
                    Web3
                </Link>
            </div>
            <div className={styles.content}>
                <Outlet/>
            </div>
        </div>
    );
}

export default Content;