import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ tabs, main }) {
    const activeStyle = {
        mainBar:{
            backgroundColor:"rgb(9, 0, 12, .8)", 
            borderColor: "rgb(4, 227, 251, 0.6)", 
            fontWeight:"500", 
            fontSize:"120%", 
            color: "rgb(4, 227, 251, 0.6)", 
            boxShadow:"inset 5px 5px 4px rgb(4, 227, 251, 0.6)"
        },
        subBar:{
            // backgroundColor:"rgb(9, 0, 12, .4)", 
            borderColor: "rgb(4, 227, 251, 0.6)", 
            fontWeight:"500", 
            fontSize:"120%", 
            color: "rgb(4, 227, 251, 0.6)", 
            boxShadow:"inset 5px 5px 4px rgb(4, 227, 251, 0.6)"
        },
    }
    const styles = {
        bar:`w-full overflow-x-scroll bg-white sticky top-0 font-semibold text-xl flex`,
        subBar:`overflow-x-scroll rounded-t-lg bg-clearBlack text-white sticky top-0 font-semibold text-lg flex w-full`,
        tab:`p-.01 flex grow items-center justify-center min-w-max max-h-min px-[20px] border-x-2 h-full`,
    }
    return (
        <div className={main? styles.bar : styles.subBar}>
            {tabs.map(tab => (
                // <div className={styles.tab}>
                <NavLink
                to={tab.route}
                key={tab.route}
                className={styles.tab}
                style={({isActive}) => (isActive ? (main? activeStyle.mainBar : activeStyle.subBar) : {fontWeight:"400"})} 
                >
                    {tab.label}
                </NavLink>
                // </div>
            ))}
        </div>
    );
}

export default NavBar;