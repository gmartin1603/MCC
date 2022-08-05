import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { subTabs, tabs } from '../Nav';

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [route, setRoute] = useState('/')
    const [links, setLinks] = useState(tabs)
    const [routeList, setRouteList] = useState([])

    const location = useLocation()

    useEffect(() => {
        console.log(location)
        let routeUpdate = location.pathname

        if (routeUpdate.length > 1) {
            routeUpdate = routeUpdate.slice(1)
            if (routeUpdate.includes('/')) {
                console.log("subRoute")
                for (const char in routeUpdate) {
                    console.log(char)
                    if (routeUpdate.charAt(char) === "/") {
                        routeUpdate = routeUpdate.slice(char)
                    }
                }
                routeUpdate = routeUpdate.slice(1)
            }
            setLinks(subTabs)
        } else {
            setLinks(tabs)
        }
        
        let arr = []
        tabs.map(link => {
            return arr.push(link.route)
        })

        setRouteList(arr)
        setRoute(routeUpdate)
    },[location])

    return (
        <AppContext.Provider value={{route, routeList, tabs, links}}>
            { children }
        </AppContext.Provider>
    );
}

export const useAppState = () => useContext(AppContext);