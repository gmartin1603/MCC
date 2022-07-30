import React from 'react';

function NotFound(props) {
    const styles = {
        main:`w-full h-full bg-clearBlack text-white text-center text-2xl font-bold p-[25%]`,
    }
    return (
        <div className={styles.main}>
            <h1 className={styles.h1}>No content to display</h1>
        </div>
    );
}

export default NotFound;