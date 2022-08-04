import React from 'react';
import Tile from './Tile';
import { tabs } from '../Nav'

function Landing(props) {
    const styles = {
        main:`max-h-[75vh] py-.01 flex flex-wrap justify-around overflow-auto`,
    }
    return (
        <div className={styles.main}>
            {tabs.map(tab => (<Tile link={tab} key={tab.route}/>))}
        </div>
    );
}

export default Landing;