import React from 'react';
import { useAppState } from '../context/AppState';
import Tile from './Tile';

function Tiles(props) {
    const {links} = useAppState()
    const styles = {
        main:`max-h-[75vh] w-full overflow-auto flex justify-around flex-wrap cursor-pointer`,
    }
    return (
        <div className={styles.main}>
            {
                links.map(link => (
                    <Tile link={link} key={link.route} />
                ))
            }
        </div>
    );
}

export default Tiles;