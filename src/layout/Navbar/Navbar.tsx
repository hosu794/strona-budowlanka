import { useCallback, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import BrandIcon from "../../assets/favicon.png";

import axios from "axios";
import { API_SERVER } from "../../constants";
import NavbarSubsite from "./NavbarSubsite";
import NavbarSubsiteMobile from "./NavbarSubsiteMobile";
import { ItemType } from "../../types/Subsite";

import SchoolNavbarSubsite from "./SchoolNavbarSubsite";
import RecruitationNavbarSubsite from "./RecruitationNavbarSubsite";

import ContactNavbarSubsite from "./ContactNavbarSubsite";

import ProcedureNavbarSubsite from "./ProceduresNavbarSubsite";

import RecruitationProceduresNavbarSubsite from "./RecruitationProceduresNavbarSubsite";
import DropdownRecruitationNavbar from "./Dropdown/DropdownRecruitationNavbar";
import DropdownSchoolNavbar from "./Dropdown/DropdownSchoolNavbar";
import DropdownContactNavbar from "./Dropdown/DropdownContactNavbar";
import DropdownJournalNavbar from "./Dropdown/DropdownJournalNavbar";
import JournalNavbarSubsite from "./JournalNavbarSubsite";

function Navbar() {
  const [subsites, setSubsites] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [schoolSubsites, setSchoolSubsites] = useState<any>();
  const [loadingSchool, setSchoolLoading] = useState<boolean>(true);

  const [recruitment, setRecruitment] = useState<any>();
  const [loadingRecruitment, setLoadingRecruitment] = useState<boolean>(false);

  const [contactSubsite, setContactSubsite] = useState<any>();
  const [loadingContactSubsite, setLoadingContactSubsite] = useState<any>();

  const [toggle, setToggle] = useState<boolean>(false);

  const [additionalInfo, setAdditionalInfo] = useState<boolean>(false);
  const [recruitation, setRecruitation] = useState<boolean>(false);
  const [recruitationSubsite, setRecruitationSubsite] = useState<any>(false);
  const [lessons, setLessons] = useState<boolean>(false);
  const [contact, setContact] = useState<boolean>(false);

  const [proceduresSubsites, setProceduresSubsites] = useState<any>();
  const [proceduresLoading, setProceduresLoading] = useState<boolean>();
  const [proceduresError, setProceduresError] = useState<any>();

  const [recruitationProceduresMobile, setRecruitationProceduresMobile] =
    useState<any>();

  const [procedures, setProcedures] = useState<any>();

  const [school, setSchool] = useState<boolean>(false);
  const [proceduresMobile, setProceduresMobile] = useState<boolean>(false);

  const [recruitationProceduresSubsites, setRecruitationProceduresSubsites] =
    useState<any>();
  const [
    recruitationProceduresLoadingSubsites,
    setRecruitationProceduresLoadingSubsites,
  ] = useState<any>();
  const [recruitationProceduresError, setRecruitationProceduresError] =
    useState<any>();

  const [recruitationProcedures, setRecruitationProcedures] =
    useState<boolean>();

  const [journalSubsite, setJournalSubsite] = useState<any>({});
  const [loadingJournalSubsite, setLoadingJournalSubsite] = useState<any>({});

  const fetchJournalSubsite = useCallback(() => {
    axios
      .get(`${API_SERVER}wp-json/api/v1/journal/subsites`)
      .then((response: any) => {
        return setJournalSubsite(response.data);
      })
      .then((response: any) => {
        setLoadingJournalSubsite(false);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  const fetchContactSubsite = useCallback(() => {
    axios
      .get(`${API_SERVER}wp-json/api/v1/contact/subsites`)
      .then((response: any) => {
        console.log(response.data);
        setContactSubsite(response.data);
      })
      .then((response: any) => {
        setLoadingContactSubsite(false);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  const fetchRecruitmentSubsite = useCallback(() => {
    axios
      .get(`${API_SERVER}wp-json/api/v1/recrutation/subsites`)
      .then((response: any) => {
        setRecruitationSubsite(response.data);
      })
      .then((response: any) => {
        setLoadingRecruitment(false);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  const fetchSubsitesCategories = useCallback(() => {
    axios
      .get(`${API_SERVER}wp-json/api/v1/categories/subsites`, {})
      .then((response: any) => {
        setSubsites(response.data);
      })
      .then((response: any) => {
        return setLoading(false);
      })
      .catch((error: any) => console.log(error));
  }, []);

  const fetchSchoolSubsites = useCallback(() => {
    axios
      .get(`${API_SERVER}wp-json/api/v1/school/subsites`)
      .then((response: any) => {
        console.log(response.data);
        setSchoolSubsites(response.data);
      })
      .then((response: any) => {
        return setSchoolLoading(false);
      })
      .catch((error: any) => console.log(error));
  }, []);

  useEffect(() => {
    fetchSubsitesCategories();
    fetchSchoolSubsites();
    fetchRecruitmentSubsite();
    fetchContactSubsite();
    fetchJournalSubsite();
  }, [
    fetchSubsitesCategories,
    fetchSchoolSubsites,
    fetchRecruitmentSubsite,
    fetchContactSubsite,
    fetchJournalSubsite,
  ]);

  function handleRecruitation(): void {
    setRecruitation(!recruitation);
  }

  function handleLessons(): void {
    setLessons(!lessons);
  }

  function handleContact(): void {
    setContact(!contact);
  }

  function handleAdditionalInfo(): void {
    setAdditionalInfo(!additionalInfo);
  }

  function tranformHamburger(): void {
    setToggle(!toggle);
  }

  function handleProcedures(): void {
    setProcedures(!procedures);
  }

  function handleSchool(): void {
    setSchool(!school);
  }

  function handleRecruitationProcedures(): void {
    setRecruitationProcedures(!recruitationProcedures);
  }

  function handleRecruitationProceduresMobile(): void {
    setRecruitationProceduresMobile(!recruitationProceduresMobile);
  }

  return (
    <nav
      aria-label="primary"
      className="fixed p-2 w-screen bg-white shadow z-20 flex-col flex-grow pb-4 md:flex md:justify-center md:flex-row"
    >
      <div className="flex mr-0 xl:mr-20 items-center">
        <Link className="link-none" to="/">
          <img
            alt="Brand icon"
            className="cursor-pointer"
            width="75px"
            height="75px"
            src={BrandIcon}
          />
        </Link>
        <Link className="link-none" to="/">
          <h1 className=" font-bold text-3xl tracking-wide cursor-pointer">
            ZS1MMZ
          </h1>
        </Link>
      </div>

      <div className="hidden flex items-center justify-start lg:flex">
        <div className="relative group">
          <button className="flex flex-row items-center w-screen px-4 py-4 mt-2 text-base text-left  bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <p className="lg:text-sm xl:text-lg font-extrabold mb-0">
              <Link className="link-none" to="/posts">
                Aktualno??ci
              </Link>
            </p>
          </button>
        </div>
        <div className="relative group">
          <button className="flex flex-row items-center w-screen px-4 py-4 mt-2 text-base text-left  bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <p className="lg:text-sm xl:text-lg font-extrabold mb-0">
              <a className="link-none" href="https://zs1mm.bip.gov.pl/">
                BIP
              </a>
            </p>
          </button>
        </div>

        {/* <div className="relative group">
          <button className="flex  flex-row items-center w-screen px-4 py-4 mt-2 text-base text-left  bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <p className="lg:text-sm xl:text-lg font-extrabold">
              <Link className="link-none" to="/library">Biblioteka</Link>
            </p>
          </button>
        </div> */}

        <div className="relative group">
          <button className="flex  flex-row items-center w-screen px-4 py-4 mt-2 text-base text-left  bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <p className="lg:text-sm xl:text-lg font-extrabold mb-0">Szko??a</p>
          </button>
          <div
            style={{
              width: "30vw",
            }}
            className="absolute z-10 hidden bg-grey-200 group-hover:block"
          >
            <div className="px-2 pt-2 font-bold pb-4 bg-green-custom shadow-lg rounded-lg">
              <div className="p-2">
                <DropdownSchoolNavbar />
                {/* <div>
                  <p
                    onClick={handleProcedures}
                    className=" text-white cursor-pointer hover:text-gray-200 mb-0"
                  >
                    Procedury
                    <i className="ml-1 fas fa-scroll"></i>
                  </p>

                  {proceduresSubsites &&
                    procedures &&
                    proceduresSubsites.map((item: any) => {
                      return (
                        <ProcedureNavbarSubsite
                          post_title={item.post_title}
                          id={item.ID}
                          key={item.ID}
                        />
                      );
                    })}
                </div> */}
              </div>
              {schoolSubsites &&
                schoolSubsites.map((item: any) => {
                  return (
                    <SchoolNavbarSubsite
                      post_title={item.post_title}
                      id={item.ID}
                      key={item.ID}
                    />
                  );
                })}
              {/* <div className="p-2">
                <p className=" text-white text-lg">
                  <Link className="link-none" to="/education-offer">Oferta edukacyjna</Link>
                </p>
              </div>
              <div className="p-2">
                <p className=" text-white text-lg">
                  <Link className="link-none" to="/recrutation">Proces rekrutacji</Link>
                </p>
              </div> */}
            </div>
          </div>
        </div>

        <div className="relative group">
          <button className="flex  flex-row items-center w-screen px-4 py-4 mt-2 text-base text-left  bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <p className="lg:text-sm xl:text-lg font-extrabold mb-0">
              <Link className="link-none" to="/gallery">
                Galeria
              </Link>
            </p>
          </button>
          <div className="absolute z-10 hidden bg-grey-200 group-hover:block"></div>
        </div>

        <div className="relative group">
          <button className="flex  flex-row items-center w-screen px-4 py-4 mt-2 text-base text-left  bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <p className="lg:text-sm xl:text-lg font-extrabold mb-0">
              Rekrutacja
            </p>
          </button>
          <div
            style={{
              width: "30vw",
            }}
            className="absolute z-10 hidden bg-grey-200 group-hover:block"
          >
            <div className="px-2 pt-2 font-bold pb-4 bg-green-custom shadow-lg rounded-lg">
              <div className="p-2">
                <DropdownRecruitationNavbar />
                {/* <div>
                  <p
                    onClick={handleRecruitationProcedures}
                    className="text-white hover:text-gray-200 cursor-pointer mb-0"
                  >
                    Proces Rekrutacji
                    <i className="ml-1 fas fa-scroll"></i>
                  </p>
                  {recruitationProceduresSubsites &&
                    recruitationProcedures &&
                    recruitationProceduresSubsites.map((item: any) => {
                      return (
                        <RecruitationProceduresNavbarSubsite
                          post_title={item.post_title}
                          id={item.ID}
                          key={item.ID}
                        />
                      );
                    })}
                </div> */}
              </div>
              {recruitationSubsite &&
                recruitationSubsite.map((item: any) => {
                  return (
                    <RecruitationNavbarSubsite
                      post_title={item.post_title}
                      id={item.ID}
                      key={item.ID}
                    />
                  );
                })}
              {/* <div className="p-2">
                <p className=" text-white text-lg">
                  <Link className="link-none" to="/education-offer">Oferta edukacyjna</Link>
                </p>
              </div>
              <div className="p-2">
                <p className=" text-white text-lg">
                  <Link className="link-none" to="/recrutation">Proces rekrutacji</Link>
                </p>
              </div> */}
            </div>
          </div>
        </div>

        <div className="relative group">
          <button className="flex  flex-row items-center w-screen px-4 py-4 mt-2 text-base text-left  bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <p className="lg:text-sm xl:text-lg font-extrabold mb-0">
              Dziennik
            </p>
          </button>
          <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
            <div className="p-4 font-bold text-white bg-green-custom shadow-lg rounded-lg">
              <DropdownJournalNavbar />
              {journalSubsite[0] &&
                journalSubsite.map((item: any) => {
                  return (
                    <JournalNavbarSubsite
                      post_title={item.post_title}
                      id={item.ID}
                      key={item.ID}
                    />
                  );
                })}
            </div>
          </div>
        </div>

        <div className="relative group">
          <button className="flex  flex-row items-center w-screen px-4 py-4 mt-2 text-base text-left  bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <p className="lg:text-sm xl:text-lg font-extrabold mb-0">Kontakt</p>
          </button>
          <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
            <div className="p-4 font-bold text-white bg-green-custom shadow-lg rounded-lg">
              <DropdownContactNavbar />
              {contactSubsite &&
                contactSubsite.map((item: any) => {
                  return (
                    <ContactNavbarSubsite
                      post_title={item.post_title}
                      id={item.ID}
                      key={item.ID}
                    />
                  );
                })}
              {/* <p className=" p-1">
                <Link className="link-none" to="/help">Pomoc psychologiczno-prawna</Link>
              </p>
              <p className=" p-1">
                <Link className="link-none" to="/contact">Kontakt do Szko??y</Link>
              </p> */}
            </div>
          </div>
        </div>

        <div className="relative group">
          <button className="flex  flex-row items-center w-screen px-4 py-4 mt-2 text-base text-left  bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <p className="lg:text-sm xl:text-lg font-extrabold mb-0">
              Dodatkowe informacje
            </p>
          </button>
          <div
            className="absolute z-10 right-0.5 hidden group-hover:block"
            style={{
              width: "70vw",
            }}
          >
            <div className="text-white bg-green-custom shadow-lg rounded-lg">
              <div className="flex flex-row p-2 text-lg tracking-wide justify-center">
                <div className="flex flex-col">
                  <div className="flex flex-wrap">
                    {subsites &&
                      subsites.map((item: ItemType) => {
                        return (
                          <NavbarSubsite
                            item={item}
                            key={item.category.term_id}
                          />
                        );
                      })}
                    {loading && "??adowanie..."}
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:block lg:hidden absolute top-5 right-5 z-10">
        <div
          className={
            toggle ? "hamburger-container change" : "hamburger-container"
          }
          onClick={tranformHamburger}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>

      <div
        className={
          toggle
            ? " md:block lg:hidden absolute top-0 right-0 z-0 w-8/12"
            : "md-navbar md:block lg:hidden absolute top-0 right-0 z-0 w-1/2"
        }
      >
        <div className="h-screen p-6 bg-red-custom overflow-y-auto">
          <div>
            <ul className="text-white list-none flex justify-center sm:text-lg md:text-2xl  text-align flex-col h-2/3 mt-10 font-bold">
              {/* <li className="p-5  cursor-pointer">
                <Link className="link-none" to="/library">Biblioteka</Link>
              </li> */}{" "}
              <li className="p-5  cursor-pointer">
                <Link className="link-none" to="/posts">
                  Aktualno????i
                </Link>
              </li>
              <li className="p-5 cursor-pointer">
                <Link className="link-none" to="/gallery">
                  Galeria
                </Link>
              </li>
              <li
                onClick={handleSchool}
                className={
                  school
                    ? "p-5  cursor-pointer underline"
                    : "p-5  cursor-pointer"
                }
              >
                Szko??a
              </li>
              {school ? (
                <ul className="flex flex-col justify-center align-items text-center">
                  <DropdownSchoolNavbar />
                  {schoolSubsites &&
                    schoolSubsites.map((item: any) => {
                      return (
                        <SchoolNavbarSubsite
                          post_title={item.post_title}
                          id={item.ID}
                          key={item.ID}
                        />
                      );
                    })}
                </ul>
              ) : null}
              <li className="p-5  cursor-pointer">
                <a href="https://zs1mm.bip.gov.pl/">BIP</a>
              </li>
              <li
                onClick={handleRecruitation}
                className={
                  recruitation
                    ? "p-5  cursor-pointer underline"
                    : "p-5  cursor-pointer"
                }
              >
                Rekrutacja
              </li>
              {recruitation ? (
                <ul className="flex flex-col justify-center align-items text-center">
                  <DropdownRecruitationNavbar />
                  {recruitationSubsite &&
                    recruitationSubsite.map((item: any) => {
                      return (
                        <RecruitationNavbarSubsite
                          post_title={item.post_title}
                          id={item.ID}
                          key={item.ID}
                        />
                      );
                    })}
                </ul>
              ) : null}
              <li
                onClick={handleLessons}
                className={
                  lessons
                    ? "p-5  cursor-pointer underline"
                    : "p-5  cursor-pointer"
                }
              >
                Dziennik
              </li>
              {lessons ? (
                <ul className="flex flex-col justify-center align-items">
                  <DropdownJournalNavbar />
                  {journalSubsite[0] &&
                    journalSubsite.map((item: any) => {
                      return (
                        <JournalNavbarSubsite
                          post_title={item.post_title}
                          id={item.ID}
                          key={item.ID}
                        />
                      );
                    })}
                </ul>
              ) : null}
              <li
                onClick={handleContact}
                className={
                  contact
                    ? "p-5  cursor-pointer underline"
                    : "p-5  cursor-pointer"
                }
              >
                Kontakt
              </li>
              {contact ? (
                <ul className="flex flex-col justify-center align-items text-center">
                  <DropdownContactNavbar />
                  {contactSubsite &&
                    contactSubsite.map((item: any) => {
                      return (
                        <ContactNavbarSubsite
                          post_title={item.post_title}
                          id={item.ID}
                          key={item.ID}
                        />
                      );
                    })}
                </ul>
              ) : null}
              <li
                onClick={handleAdditionalInfo}
                className={
                  additionalInfo
                    ? "p-5  cursor-pointer underline"
                    : "p-5  cursor-pointer"
                }
              >
                Dodatkowe informacje
              </li>
              {additionalInfo ? (
                <ul className="flex flex-col justify-center align-items text-center">
                  {subsites &&
                    subsites.map((item: ItemType) => {
                      return (
                        <NavbarSubsiteMobile
                          item={item}
                          key={item.category.term_id}
                        />
                      );
                    })}
                  {loading && "??adowanie..."}
                </ul>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
