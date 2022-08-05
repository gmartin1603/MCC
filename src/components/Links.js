import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom'
import { useAppState } from '../context/AppState';
import {subTabs} from '../Nav'
import NavBar from './NavBar';
import Tile from './Tile';

function Links(props) {

    const {route, links, routeList} = useAppState()

    useEffect(() => {
        console.log(route)
    },[route])

    const styles = {
        main:`max-h-[75vh] w-full overflow-auto flex justify-around flex-wrap cursor-pointer`,
    }
    return (
        <div className={styles.main}>
            {routeList.includes(route)?
                subTabs.map(link => (
                    <Tile link={link} key={link.route} />
                ))
                :
                <>
                    <NavBar tabs={subTabs} />
                    <Outlet/>
                </>
            }
        </div>
    );
}

export default Links;