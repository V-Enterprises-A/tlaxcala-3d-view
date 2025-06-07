import React from 'react'
import  "animate.css";

function InformationArea() {

    return (
        <div className='InfoBar animate__fadeInUp' >
            <div className='IcoInfo'>
                <img src="./react.svg" alt="" />
            </div>

            <h1 className='Title'> Capilla Jesus Del Rio </h1>
            <h3 className='Location'> Ubicación </h3>

            <p className='Data'>
                Lorem lorem et lorem erat rebum erat ullamcorper lorem sit nonumy iriure lorem accumsan blandit et. Dolores diam sadipscing rebum ea lorem gubergren. Eu diam erat labore praesent et veniam vero sed accusam ut amet dolor.
            </p>

        </div>
    )

}

export default InformationArea