import * as React from 'react'

import Image from '../../assets/gallery.svg'

const GalleryLandingPage = () => {

    return (
        <main className="flex items-center justify-center lg:h-auto h-screen bg-white">    
            <div className="h-screen w-screen flex justify-center items-center flex-col xl:justify-around space-x-10  xl:flex-row text-white">
               <div className="flex justify-center items-center flex-col">
                    <img src={Image} alt="Gallery"/>
                   <h1 className="text-5xl text-black text-center pt-10 font-bold">Galeria</h1>
               </div>
               </div>
        </main>
    )
}

export default GalleryLandingPage