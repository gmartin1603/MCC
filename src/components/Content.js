import React from 'react';
import { Outlet } from 'react-router-dom';
import { tabs } from '../Nav'
import NavBar from './NavBar';

function Content(props) {

    const styles = {
        main:`m-.01 w-full max-w-[1200px] overflow-scroll rounded border-4 border-white shadow-md shadow-white bg-clickedBlue`,
        bar:`bg-white p-.01 sticky top-0 font-semibold text-xl flex justify-around`,
        subBar:`bg-clearBlack text-white p-.01 sticky top-[40px] font-semibold text-xl flex justify-around`,
        tab:``,
        content:`p-.02`,
    }
    return (
        <div className={styles.main}>
            <NavBar tabs={tabs} main />
            <div className={styles.content}>
                <Outlet/>
            </div>
        </div>
    );
}

export default Content;