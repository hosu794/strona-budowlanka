 const LessonsLandingPage = () => {
    return (
        <main className="flex items-center justify-center h-screen w-screen bg-green">    
            <div className="h-screen w-screen flex justify-center items-center flex-col xl:justify-around space-x-10 xl:flex-row text-white">
               
            <div>
                <h1 className="text-2xl text-center mb-5 font-bold">Plan Lekcji</h1>
                <div className="bg-gray-300 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96">

                </div>
            </div>

            <div style={{
                marginLeft: "0"
            }} className="mt-10 lg:mt-0">
                <h1 className="text-2xl text-center mb-5 font-bold">Dziennik</h1>
                <div className="bg-gray-300 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96">

            </div>
            </div>

            </div>
        </main>
    )
}

export default LessonsLandingPage