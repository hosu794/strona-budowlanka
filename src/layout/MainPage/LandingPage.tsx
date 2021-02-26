 import LogoImage from '../../assets/logo.jpg'
 
 const LandingPage = () => {
    return (
        <main className="flex items-center justify-center h-screen">    
            <div className="h-auto w-screen flex justify-center space-x-10 flex-col-reverse  xl:flex-row">
                    <div className="ml-6 xl:ml-0 flex flex-col justify-center align-items">
                    <span className="text-left text-base lg:text-2xl font-extrabold ml-6 uppercase text-light-blue">Strona</span>
                    <span className="text-left text-2xl lg:text-5xl p-3 text-blue font-extrabold">Zespół Szkół nr 1 </span>
                    <span className="text-left text-2xl lg:text-5xl p-3 text-blue font-extrabold">W Mińsku Mazowieckim</span>
                    <button className="w-1/2 ml-3 md:ml-0 lg:w-3/4 text-white py-4 px-7 text-sm  sm:text-lg lg:text-2xl font-extrabold tracking-wider bg-green-custom rounded-md font-medium mt-5">Aktualności</button>
                    </div>
                    <img alt="School" className="mb-10 h-10/12 w-10/12 xl:mb-0 md:h-10/12 md:w-10/12 lg:h-8/12 lg:w-8/12 xl:h-4/12 xl:w-4/12 rounded-md" src={LogoImage} /> 
            </div>
        </main>
    )
};

export default LandingPage