import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom'
import {subTabs} from '../Nav'
import NavBar from './NavBar';
import Tile from './Tile';

function Links(props) {

    const [activeRoute, setActiveRoute] = useState(undefined)

    const url = window.location.href

    const handleClick = (route) => {
        setActiveRoute(route)
    }

    useEffect(() => {
        console.log(url)
        let slash = 0
        let route = ''
        for (const char in url) {
            if (url.charAt(char) === "/") {
                slash = slash + 1
                if (slash === 4) {
                    // console.log(url.slice(char))
                    route = url.slice(char)
                }
            }
        }
        if (slash < 4) {
            setActiveRoute(false)
        } else {
            setActiveRoute(true)
        }
        console.log(route)
    },[url])

    const styles = {
        main:`max-h-[75vh] flex justify-around flex-wrap cursor-pointer`,
    }
    return (
        <div className={styles.main}>
            {!activeRoute?
                subTabs.map(link => (
                    <Tile link={link} handleClick={handleClick} />
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