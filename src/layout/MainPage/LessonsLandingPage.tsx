import * as React from 'react'

import LessonImage from '../../assets/lessons.svg'
import DiaryImage from '../../assets/diary.svg'

const LessonsLandingPage = () => {
    return (
        <main className="flex items-center justify-center xl:h-auto h-screen w-screen bg-green">    
            <div className=" h-screen w-screen  flex justify-center items-center flex-col xl:justify-around space-x-10 xl:flex-row text-white">
            <div>
                <div className="w-40 h-40 sm:w-96 sm:h-96 xl:w-full xl:h-full">
                    <img src={LessonImage} alt="Lessons" />
                </div>
                <h1 className="text-2xl text-center pt-5 font-bold">Plan Lekcji</h1>
            </div>

            <div>
                <div className="pt-10 xl:pt-0 w-40 h-40 sm:w-96 sm:h-96 xl:w-3/4 xl:h-3/4">
                    <img src={DiaryImage} alt="Lessons" />
                </div>
                <h1 className="text-2xl text-center pt-5 font-bold">Dziennik</h1>
            </div>

            </div>
        </main>
    )
}

export default LessonsLandingPage