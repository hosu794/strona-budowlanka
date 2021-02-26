import { useState } from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);

  const [additionalInfo, setAdditionalInfo] = useState<boolean>(false);
  const [recruitation, setRecruitation] = useState<boolean>(false)
  const [lessons, setLessons] = useState<boolean>(false)
  const [contact, setContact] = useState<boolean>(false)  

  const [aboutSchool, setAboutSchool] = useState<boolean>(false);
  const [efs, setEfs] = useState<boolean>(false);
  const [additionalLearningResource, setAdditionalLearningResource] = useState<boolean>(false); 
  const [schoolBoard, setSchoolBoard] = useState<boolean>(false);   
  const [schoolDocuments, setSchoolDocuments] = useState<boolean>(false)


  function handleRecruitation(): void {
    setRecruitation(!recruitation)
  }

  function handleLessons(): void {
    setLessons(!lessons)
  }

  function handleContact(): void {
    setContact(!contact)
  }

  function handleAdditionalInfo(): void {
    setAdditionalInfo(!additionalInfo)
  }

  function handleAboutSchool(): void {
    setAboutSchool(!aboutSchool)
  }

  function handleEfs(): void {
    setEfs(!efs)
  }

  function handleAdditionalLearningResource(): void {
    setAdditionalInfo(!additionalLearningResource)
  }

  function handleSchoolBoard(): void {
    setSchoolBoard(!schoolBoard)
  }

  function handleSchoolDocuments(): void {
    setSchoolDocuments(!schoolDocuments)
  }

  function tranformHamburger(): void {
    setToggle(!toggle);
}

return (
    <nav aria-label="primary" className="fixed p-2 w-screen bg-white shadow z-20 flex-col flex-grow pb-4 md:flex md:justify-center md:flex-row">
    <div className="flex mr-0 xl:mr-20 items-center">
        <Link to="/"><img className="cursor-pointer" width="75px" height="75px" src="/favicon.png"/></Link>
        <Link to="/"><h1 className="uppercase font-bold text-3xl tracking-wide cursor-pointer">ZS1MMZ</h1></Link>
        
    </div>

    <div className="hidden flex items-center justify-start lg:flex">
    <div className="relative group">
        <button className="flex flex-row items-center w-screen px-4 py-4 mt-2 text-base text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <span className="lg:text-sm xl:text-lg font-extrabold"><Link to="/posts">Aktualności</Link></span>
        </button>
    </div>  
    
    <div className="relative group">
        <button className="flex uppercase flex-row items-center w-screen px-4 py-4 mt-2 text-base text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <span className="lg:text-sm xl:text-lg font-extrabold"><Link to="/library">Biblioteka</Link></span>
        </button>
    </div>  

    <div className="relative group">
        <button className="flex uppercase flex-row items-center w-screen px-4 py-4 mt-2 text-base text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <span className="lg:text-sm xl:text-lg font-extrabold"><Link to="/gallery">Galeria</Link></span>
        </button>
        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
            
           
        </div>
    </div>  

    <div className="relative group">
        <button className="flex uppercase flex-row items-center w-screen px-4 py-4 mt-2 text-base text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <span className="lg:text-sm xl:text-lg font-extrabold">Rekrutacja</span>
        </button>
        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
            
            <div className="px-2 pt-2 font-bold pb-4 bg-green-custom shadow-lg rounded-lg">
             <div className="p-2">
              <p className="uppercase text-white text-lg"><Link to="/education-offer">Oferta edukacyjna</Link></p>
             </div>
            </div>
        </div>
    </div>  

    <div className="relative group">
        <button className="flex uppercase flex-row items-center w-screen px-4 py-4 mt-2 text-base text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <span className="lg:text-sm xl:text-lg font-extrabold">Dziennik</span>
        </button>
        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">

          <div className="p-4 font-bold text-white bg-green-custom shadow-lg rounded-lg">
                <p className="uppercase p-1"><Link to="/vulcan">Vulcan</Link></p>
                <p className="uppercase p-1"><Link to="/lessons">Plan Lekcji</Link></p>
          </div>   
        </div>
    </div>  


    <div className="relative group">
        <button className="flex uppercase flex-row items-center w-screen px-4 py-4 mt-2 text-base text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <span className="lg:text-sm xl:text-lg font-extrabold">Kontakt</span>
        </button>
        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
            
        <div className="p-4 font-bold text-white bg-green-custom shadow-lg rounded-lg">
                <p className="uppercase p-1"><Link to="/help">Pomoc psychologiczno-prawna</Link></p>
                <p className="uppercase p-1"><Link to="/contact">Kontakt do Szkoły</Link></p>
          </div>   
        </div>
    </div>  

    <div className="relative group">
        <button className="flex uppercase flex-row items-center w-screen px-4 py-4 mt-2 text-base text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <span className="lg:text-sm xl:text-lg font-extrabold">Dodatkowe informacje</span>
        </button>
        <div className="absolute z-10 right-0.5 hidden group-hover:block">

            <div className="text-white px-2 pt-2 pb-4 bg-green-custom shadow-lg rounded-lg">
              <div className="flex flex-row p-10 text-lg tracking-wide">

                <div className="flex flex-col">

                  <div className="p-7">
                    <h1 className="uppercase p-1 font-bold">O szkole</h1>
                    <p className="uppercase p-1">Patron</p>
                    <p className="uppercase p-1">Wyposażenie </p>
                    <p className="uppercase p-1">Biblioteka</p>
                    <p className="uppercase p-1">Archiwum</p>
                  </div>

                  <div className="p-7">
                    <h1 className="uppercase font-bold p-1">EFS</h1>
                    <p className="uppercase p-1">Zespoły Przedmiotowe</p>
                    <p className="uppercase p-1">Pośrednictwo Pracy</p>
                    <p className="uppercase p-1">Internat</p>
                  </div>
                </div>

                <div className="flex flex-col">

                <div className="p-7">
                  <h1 className="uppercase font-bold">Dodatkowe materiały do nauki</h1>
                  <p className="uppercase p-1">English Corner</p>
                  <p className="uppercase p-1">Akademia Cisco</p>
                  <p className="uppercase p-1">Akademia Suse Linux</p>
                </div>

                <div className="p-7">
                  <h1 className="uppercase font-bold">Rada Rodziców / Samorząd</h1>
                  <p className="uppercase p-1">Rada Rodziców</p>
                  <p className="uppercase p-1">Samorząd</p>
                </div>
                </div>


                <div className="flex flex-col">

                <div className="p-7">
                  <h1 className="uppercase font-bold font-bold text-xl mb-3">Dokumenty</h1>
                  <p className="uppercase p-1"><Link to="/school-statute">Statut szkoły</Link></p>
                  <p className="uppercase p-1"><Link to="/school">Szkoła</Link></p>
                  <p className="uppercase p-1"><Link to="/information-obligation">Obowiązek informacyjny</Link></p>
                  <p className="uppercase p-1"><Link to="/procedures">Procedury</Link></p>
                  <p className="uppercase p-1"><Link to="/for-graduates">Dla abolwentów</Link></p>
                  <p className="uppercase p-1"><Link to="/exams">Egzaminy</Link></p>
                  <p className="uppercase p-1"><Link to="/timetable">Terminarz rad i zebrań</Link></p>
                  <p className="uppercase p-1"><Link to="/book-list">Wykaz podręczników</Link></p>
                </div>

                </div>
              <div>
                </div>
              </div>
            </div>
        </div>
   
   
   </div>
   
    </div>  
      <div className="md:block lg:hidden absolute top-5 right-5 z-10">
        <div className={toggle ? "hamburger-container change" : "hamburger-container"} onClick={tranformHamburger}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
    </div>
      </div>
 

      <div className={toggle ? " md:block lg:hidden absolute top-0 right-0 z-0 w-8/12" : "md-navbar md:block lg:hidden absolute top-0 right-0 z-0 w-1/2"}>
        <div className="h-screen p-6 bg-red-custom overflow-y-auto">
            <div>
              <ul className="text-white flex justify-center sm:text-lg md:text-2xl uppercase text-align flex-col h-2/3 mt-10 font-bold">
                <li className="p-5 uppercase cursor-pointer">Aktualnośći</li>
                 <li className="p-5 uppercase cursor-pointer">Biblioteka</li>
                <li className= "p-5 uppercase cursor-pointer">Galeria</li>
                <li onClick={handleRecruitation} className={recruitation ? "p-5 uppercase cursor-pointer underline" : "p-5 uppercase cursor-pointer"}>Rekrutacja</li>
                {recruitation ? (
                   <ul className="flex flex-col justify-center align-items text-center">
                   <li className="uppercase text-left pl-7">Oferta edukacyjna</li>
                 </ul>
                ) : null}
                <li onClick={handleLessons} className={lessons ? "p-5 uppercase cursor-pointer underline" : "p-5 uppercase cursor-pointer"}>Dziennik</li>
                {lessons ? (
                   <ul className="flex flex-col justify-center align-items">
                   <li className="uppercase text-left pl-7 pb-2">Dziennik</li>
                   <li className="uppercase text-left pl-7 pb-2">Vulcan</li>
                 </ul>
                ) : null}
                <li onClick={handleContact} className={contact ? "p-5 uppercase cursor-pointer underline" : "p-5 uppercase cursor-pointer"}>Kontakt</li>
                {contact ? (
                  <ul className="flex flex-col justify-center align-items text-center">
                  <li className="uppercase text-left pl-7 pb-2">Pomoc psychologiczno-prawna</li>
                </ul>
                ) : null}
                <li onClick={handleAdditionalInfo} className={additionalInfo ? "p-5 uppercase cursor-pointer underline" : "p-5 uppercase cursor-pointer"}>Dodatkowe informacje</li>
                {additionalInfo ? (
                  <ul className="flex flex-col justify-center align-items text-center">
                   <li onClick={handleAboutSchool}  className={aboutSchool ? "uppercase text-left cursor-pointer pl-7 pb-2 underline" : "uppercase text-left cursor-pointer pl-7 pb-2"}>O Szkole</li>
                   {aboutSchool ? (
                      <ul className="flex flex-col justify-center align-items text-center">
                      <li className="uppercase text-left pl-9 pb-4 ">Patron</li>
                      <li className="uppercase text-left pl-9 pb-4 ">Wyposażenie</li>
                      <li className="uppercase text-left pl-9 pb-4 ">Biblioteka</li>
                      <li className="uppercase text-left pl-9 pb-4 ">Archiwum</li>
                    </ul>
                   ) : null}
                   <li onClick={handleEfs} className={efs ? "uppercase text-left cursor-pointer pl-7 pb-2 underline" : "uppercase text-left cursor-pointer pl-7 pb-2"}>EFS</li>
                  {efs ? (
                     <ul className="flex flex-col justify-center align-items text-center">
                     <li className="uppercase text-left pl-9 pb-4 ">Zespoły Przedmiotowe</li>
                     <li className="uppercase text-left pl-9 pb-4 ">Wyposażenie</li>
                     <li className="uppercase text-left pl-9 pb-4 ">Biblioteka</li>
                     <li className="uppercase text-left pl-9 pb-4 ">Archiwum</li>
                   </ul>
                  ) : null}
                   <li onClick={handleAdditionalLearningResource} className={additionalLearningResource ? "uppercase text-left cursor-pointer pl-7 pb-2 underline" : "uppercase text-left cursor-pointer pl-7 pb-2"}>Dodatkowe materiały do nauki</li>
                   {additionalLearningResource ? (
                     <ul className="flex flex-col justify-center align-items text-center">
                     <li className="uppercase text-left pl-9 pb-4 ">English Corner</li>
                     <li className="uppercase text-left pl-9 pb-4 ">Akademia Cisco</li>
                     <li className="uppercase text-left pl-9 pb-4 ">Akademia Suse Linux</li>
                   </ul>
                   ) : null}
                   <li onClick={handleSchoolBoard} className={schoolBoard ? "uppercase text-left cursor-pointer pl-7 pb-2 underline" : "uppercase text-left cursor-pointer pl-7 pb-2"}>Rada Rodziców/Szkoły</li>
                   {schoolBoard ? (
                     <ul className="flex flex-col justify-center align-items text-center">
                     <li className="uppercase text-left pl-9 pb-4 ">Rada Rodziców</li>
                     <li className="uppercase text-left pl-9 pb-4 ">Samorząd</li>
                   </ul>
                   ) : null}
                   <li onClick={handleSchoolDocuments} className={schoolDocuments ? "uppercase text-left cursor-pointer pl-7 pb-2 underline" : "uppercase text-left cursor-pointer pl-7 pb-2"}>Dokumenty</li>
                   {schoolDocuments ? (
                     <ul className="flex flex-col justify-center align-items text-center">
                     <li className="uppercase text-left pl-9 pb-4 ">Status Szkoły</li>
                     <li className="uppercase text-left pl-9 pb-4 ">Szkoła</li>
                     <li className="uppercase text-left pl-9 pb-4 ">Obowiązek informacyjny</li>
                     <li className="uppercase text-left pl-9 pb-4 ">Procedury</li>
                     <li className="uppercase text-left pl-9 pb-4 ">Dla Absolwentów</li>
                     <li className="uppercase text-left pl-9 pb-4 ">Egzaminy</li>
                     <li className="uppercase text-left pl-9 pb-4 ">Terminarz Rad i Zebrań</li>
                     <li className="uppercase text-left pl-9 pb-4 ">Wykaz Podręczników</li>
                   </ul>
                   ) : null}
                  </ul>
                ) : null}
              </ul>
            </div>
        </div>
      </div>
  </nav>
)    
}
    

export default Navbar