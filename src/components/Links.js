import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom'
import SEO from '../assets/SEO.png'
import NFT from '../assets/NFT.png'
import phone from '../assets/phone.png'

function Links(props) {

    const [activeRoute, setActiveRoute] = useState(undefined)

    let navigate = useNavigate()

    const url = window.location.href

    const handleClick = (route) => {
        setActiveRoute(route)
        navigate(route, {replace:true})
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
            setActiveRoute(undefined)
        } else {
            setActiveRoute(route)
        }
        console.log(slash)
    },[url])

    const subTabs = [
        {
            label:"Progessive Web Apps", 
            route:"webApps",
            img: SEO,
            bio:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Auatis consequuntur dolorem, quasi cumque ipsam neque distinctio labore, expedita autem error magni, alias sapiente repudiandae. Rem, totam.`,
        },
        {
            label:"Web3", 
            route:"web3",
            img: NFT,
            bio:`Blockchain, NFT, Crypto, Oh my! Lorem ipsum dolor, sit amet consectetur consequuntur dolorem, quasi cumque ipsam neque distinctio labore, expedita autem error magni, alias sapiente repudiandae. Rem, totam.`,
        },
        {
            label:"Android/ios Applications", 
            route:"mobileApps",
            img: phone,
            bio:`Leverage native device utilities Lorem ipsum dolor, sit amet perspiciatis consequuntur dolorem, quasi cumque ipsam neque distinctio labore, expedita autem error magni, alias sapiente repudiandae. Rem, totam.`,
        },
    ]
    const styles = {
        main:`flex justify-around flex-wrap cursor-pointer`,
        link:`bg-white grow flex flex-col items-center h-fit max-w-[300px] rounded text-center p-.01`,
        img:`max-h-[200px]`,
        h1:`text-2xl font-semibold`,
        h2:`text-lg font-semibold`,
        p:`p-.02 text-left`,
    }
    return (
        <div className={styles.main}>
            {!activeRoute?
                subTabs.map(link => (
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
                ))
                :
                <Outlet/>
            }
        </div>
    );
}

export default Links;