import React from "react"
import ImageGallery from "react-image-gallery"
import './style/Gallery.css'

const Projects = ({}) => {

    const imgs = [
        {original:"https://lh3.googleusercontent.com/8rzU_0GsC6dtFqdAy9oc9ULbazNw7VR4CqiMuKzMIv6p7PI_kQnwr0kNSPj9hdYTVFQFcQC4W86k7WlWkNLTI56Ac2JBdcHbbl1Wa-HzSq3JWa41gqqiXZazFifcJTob__aUjybKyQ=w2400", originalAlt:"schedule"},
        {original:"https://lh3.googleusercontent.com/FafkSb0Thpz2Y-s8mKKDIalRoqdSn0wTw_j6gygnYihFEthqopOGDkj9atk9AmcR40K0tqY4MFH5ICZa2pKpqACgc0Az4b90xP2aU-96CuGGRUYCeKiPgcKJrzF5jMXR__y0uaRBew=w2400", originalAlt:"posting signup form"},
        {original:"https://lh3.googleusercontent.com/-q49Q04OVxMRq4Im_j-Kx4vzavbICKzaEaoJWaZ7mOVl5rs6RFGUoEMuovbhrhrLD_rztSoX4MTdltiKg32FwPbiCQilCJEpGzsZvX_MUjYf85nr5RgZmT_-6B4bx826ky0HaZ1Afg=w2400", originalAlt:"down postings screen"},
    ]

    const styles = {
        main:``,
        project:`flex flex-wrap justify-around gap-2 w-full p-2`,
        infoCont:`flex flex-wrap gap-2 w-[25%]`,
        imgCont:`w-[70%]`,
        container:`w-full flex flex-col gap-2 border-b-2 border-white p-2`,
        iconCont:`flex flex-wrap gap-2 justify-center items-center`,
    }

  return (
    <div className={styles.main}>
      <div className={styles.project}>
        <h1 className={"w-full text-center font-bold text-xl bg-white rounded-md border p-.01"}>Overtime Management</h1>
        <div className={styles.infoCont}>
            <div className={styles.container}>
                <h2 className={"w-full font-semibold text-white text-lg text-center"}>Stack</h2>
                <div className={styles.iconCont}>
                    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react" />
                    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwind" />
                    {/* <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="react-router" /> */}
                    <img src="https://img.shields.io/badge/-Firebase-05122A?style=for-the-badge&logo=firebase" alt="firebase" />
                    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="express" />
                </div>
            </div>
            <div className={styles.container}>
                <h2 className={"w-full font-semibold text-white text-lg text-center"}>Description</h2>
                <p className={"w-full text-white text-center"}>A web application that allows users to track their overtime hours and request time off.</p>
            </div>
            <div className={styles.container}>
                <h2 className={"w-full font-semibold text-white text-lg text-center"}>Links</h2>
                <div className={styles.iconCont}>
                    <a href="https://github.com/gmartin1603/friendly-spork/tree/master" target="_blank" rel="noreferrer">
                        <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="github" />
                    </a>
                    <a href="https://friendly-spork.web.app/" target="_blank" rel="noreferrer">
                        <img src="https://img.shields.io/badge/Website-05122A?style=for-the-badge&logo=google-chrome&logoColor=white" alt="website" />
                    </a>
                </div>
            </div>
        </div>
        <div className={styles.imgCont}>
            <ImageGallery items={imgs} />
        </div>
      </div>
    </div>
  )
}

export default Projects
