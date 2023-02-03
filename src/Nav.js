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
            "label":"Skills",
            "route":"skills",
            "img": services,
            "bio":`In depth look at my skills and what I can do for you.`,
        },
        {
            "label":"Spot Light Projects",
            "route":"spotLight",
            "img": lightBulb,
            "bio":`My top projects and what I've learned from them.`,
        },
        {
            "label":"Tech Stack",
            "route":"tech",
            "img": tutor,
            "bio":`Check out my current language and framework specialties and what I'm learning.`,
        },
        // {
        //     "label":"Testimonials",
        //     "route":"reviews",
        //     "img": fiveStars,
        //     "bio":`See what past and current clinets have to say! `,
        // }
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