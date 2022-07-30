import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ tabs, main }) {
    const styles = {
        bar:`w-full bg-white p-.01 sticky top-0 font-semibold text-xl flex justify-around`,
        subBar:`w-full rounded-t-lg bg-clearBlack text-white p-.01 sticky top-[40px] font-semibold text-xl flex justify-around`,
        tab:``,
    }
    return (
        <div className={main? styles.bar : styles.subBar}>
            {tabs.map(tab => (
                <Link
                to={tab.route}
                key={tab.route}
                >
                    {tab.label}
                </Link>
            ))}
        </div>
    );
}

export default NavBar;