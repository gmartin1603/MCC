import React from 'react';
import Tile from './Tile';
import { tabs } from '../Nav'

function Landing(props) {
    const styles = {
        main:`flex flex-wrap justify-between`,
    }
    return (
        <div className={styles.main}>
            {tabs.map(tab => (<Tile link={tab} key={tab.route}/>))}
        </div>
    );
}

export default Landing;