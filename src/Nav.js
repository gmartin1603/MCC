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
            "label":"Software Solutions", 
            "route":"services",
            "img": services,
            "bio":`More about the custom solutions we provide for our client's modern problems.`,
        },
        {
            "label":"Tutoring", 
            "route":"tutoring",
            "img": tutor,
            "bio":`Resouces for aspiring software engineers.`,
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
            label:"Custom Web Applications", 
            route:"webApps",
            img: SEO,
            bio:`Design, Development, Deployment, and Mantinace`,
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