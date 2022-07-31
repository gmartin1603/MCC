import React from 'react';
import { MailOutline, LinkedIn } from '@mui/icons-material';

function Contact(props) {

    const profile = {
        email: 'countryCoder20@gmail.com',
        phone: ''
    }

    const styles = {
        main:`flex flex-wrap w-max h-fit bg-purple p-.01 text-white text-lg text-center font-semibold`,
        method:`flex p-.01`,
        p:`px-10`,
    }
    return (
        <div className={styles.main}>
            <div className={styles.method}>
            <MailOutline/>
            <a href="mailto: countryCoder20@gmail.com" className={styles.p}>{profile.email}</a>
            </div>
            <div className={styles.method}>
            <LinkedIn/>
            <p className={styles.p}>Message me on LinkedIn</p>
            </div>
        </div>
    );
}

export default Contact;