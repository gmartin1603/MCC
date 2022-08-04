const services = require('./assets/services.png')
const fiveStars = require('./assets/fiveStars.png')
const lightBulb = require('./assets/lightBulb.png')
const SEO = require('./assets/SEO.png')
const NFT = require('./assets/NFT.png')
const phone = require('./assets/phone.png')
const tutor = require('./assets/tutor.png')

const Nav = {
    tabs: [
        {
            "label":"Services", 
            "route":"services",
            "img": services,
            "bio":`More about the how we provide custom solutions for modern problems.`,
        },
        {
            "label":"Tutoring", 
            "route":"tutoring",
            "img": tutor,
            "bio":`Learn more about our tutoring resourses.`,
        },
        {
            "label":"Testimonials", 
            "route":"reviews",
            "img": fiveStars,
            "bio":`See what past and current clinets have to say! `,
        },
        {
            "label":"About", 
            "route":"about",
            "img": lightBulb,
            "bio":`All about Martin Solutions LLC. and what we do.`,
        }
    ],
    subTabs:[
        {
            label:"Custom Applications", 
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
}
export default Nav
export const tabs = Nav.tabs
export const subTabs = Nav.subTabs