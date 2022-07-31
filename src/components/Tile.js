import React from 'react';
import { Link } from 'react-router-dom';

function Tile({link, handleClick}) {

    const styles = {
        link:`bg-white m-.01 grow flex flex-col items-center h-fit w-full max-w-[200px] max-h-[80%] overflow-hidden rounded text-center p-.02`,
        img:`max-h-fit`,
        h1:`text-2xl font-semibold`,
        h2:`text-lg font-semibold`,
        p:`p-.02 text-left`,
    }
    return (
        <Link to={link.route}>
            <div 
            className={styles.link} 
            key={link.route}
            value={link.route}
            onClick={() => handleClick(link.route)}
            >
                <img className={styles.img} src={link.img} alt="icon" />
                <h1 className={styles.h1}> {link.label} </h1>
                <p className={styles.p}>
                    {link.bio}
                </p>
            </div>
        </Link>
    );
}

export default Tile;