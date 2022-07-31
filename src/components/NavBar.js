import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ tabs, main }) {
    const styles = {
        bar:`w-full bg-white sticky top-0 font-semibold text-xl flex justify-around`,
        subBar:`w-full overflow-auto rounded-t-lg bg-clearBlack text-white sticky top-[40px] font-semibold text-lg flex justify-around items-center`,
        tab:`flex items-center justify-center min-w-max min-h-[55px] px-[20px] p-.01 grow border-x-2 h-full text-center`,
    }
    return (
        <div className={main? styles.bar : styles.subBar}>
            {tabs.map(tab => (
                <Link
                to={tab.route}
                key={tab.route}
                className={styles.tab}
                >
                    {tab.label}
                </Link>
            ))}
        </div>
    );
}

export default NavBar;