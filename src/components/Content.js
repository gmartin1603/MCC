import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAppState } from '../context/AppState';
import NavBar from './NavBar';

function Content(props) {

    const {tabs, route} = useAppState()

    const styles = {
        main:`m-.01 w-full max-w-[1200px] overflow-auto rounded border-4 border-white shadow-md shadow-white bg-clickedBlue`,
        content:`p-.02`,
    }
    return (
        <div className={styles.main}>
            {route !== '/' &&
                <NavBar tabs={tabs} main />
            }
            <div className={styles.content}>
                <Outlet/>
            </div>
        </div>
    );
}

export default Content;