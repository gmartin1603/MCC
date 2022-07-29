import React from 'react';
import { MailOutline, LinkedIn } from '@mui/icons-material';

function Contact(props) {

    const profile = {
        email: 'countryCoder20@gmail.com',
        phone: ''
    }

    const styles = {
        main:`w-max h-fit bg-purple p-.01 text-white text-lg text-center font-semibold`,
        method:`flex p-.01`,
        p:`px-10`,
    }
    return (
        <div className={styles.main}>
            <h1 className={styles.h1}>Contact</h1>
            <div className={styles.method}>
            <MailOutline/>
            <p className={styles.p}>{profile.email}</p>
            </div>
            <div className={styles.method}>
            <LinkedIn/>
            <p className={styles.p}>Message me on LinkedIn</p>
            </div>
        </div>
    );
}

export default Contact;